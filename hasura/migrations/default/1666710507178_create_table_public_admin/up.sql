CREATE TABLE "public"."admin" ("id" uuid NOT NULL, "username" text NOT NULL, "password" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("username"));
