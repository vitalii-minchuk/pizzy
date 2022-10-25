import { GraphQLClient } from "graphql-request";
import { Handler } from "@netlify/functions";
import jwt from "jsonwebtoken";
import { getSdk } from "../common/sdk";
import crypto from "crypto";

interface AdminRegisterInput {
  username: string;
  password: string;
}

const handler: Handler = async (event, context) => {
  const { body } = event;
  const input: AdminRegisterInput = JSON.parse(body!).input.admin;

  const sdk = getSdk(new GraphQLClient("http://localhost:8080/v1/graphql"));

  const password = crypto
    .pbkdf2Sync(input.password, "mygreatsaltsecret", 1000, 64, "sha512")
    .toString("hex");

  const data = await sdk.InsertAdmin({
    username: input.username,
    password,
  });

  const accessToken = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-default-role": "admin",
        "x-hasura-user-id": data.insert_admin?.returning[0].id,
      },
    },
    "myadmingreatesecret"
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken }),
  };
};

export { handler };
