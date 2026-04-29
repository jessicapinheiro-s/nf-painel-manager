import z from "zod";

export const schemaAuthRegister = z.object({
  email: z.email("email address is missing"),
  password: z.string("password is missing"),
});

export const schemaAuthLogin = z.object({
  email: z.email("email address is missing"),
  password: z.string("password is missing"),
});

export const schemaAuthLogout = z.object({});
