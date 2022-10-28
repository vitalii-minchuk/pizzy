import { Handler } from "@netlify/functions";
import { api } from "../common/api";
import { signToken } from "../common/jwt";
import { hashPassword } from "../common/passwords";
import { AdminRegisterInput } from "../common/sdk";

const handler: Handler = async (event, context) => {
  const { body, headers } = event;

  if (
    !headers["x-pizzy-secret-key"] ||
    headers["x-pizzy-secret-key"] !== "pizzysecretkey"
  ) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        message: "'x-pizzy-secret-key' is missing or value is invalid",
      }),
    };
  }

  const input: AdminRegisterInput = JSON.parse(body!).input.admin;

  const password = hashPassword(input.password);

  const data = await api.InsertAdmin(
    {
      username: input.username,
      password,
    },
    {
      "x-hasura-admin-secret": "myadminsecretkey",
    }
  );

  const accessToken = signToken(data.insert_admin_one?.id);

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken }),
  };
};

export { handler };
