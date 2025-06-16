import { body, oneOf } from "express-validator";

export const putUserValidation = [
  oneOf(
    [
      body("name").exists({ checkFalsy: true }).isString(),
      body("email").exists({ checkFalsy: true }).isEmail(),
    ],
    { message: "Either a valid name or a valid email is required" }
  ),
];
