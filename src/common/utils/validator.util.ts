import { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const validationErrorsHandler: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      error: true,
      message: "Validation error",
      details: errors.array(),
    });
    return;
  }
  next();
};
