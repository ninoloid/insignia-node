import { Router } from "express";
import { RegisterController } from "../domain/auth/controllers/RegisterController";
import { LoginController } from "../domain/auth/controllers/LoginController";
import { Request, Response, NextFunction } from "express";
import { registerValidation } from "../domain/auth/validators/register.validator";
import { validationErrorsHandler } from "../common/utils/validator.util";
import { loginValidation } from "../domain/auth/validators/login.validator";
import { LoginService } from "../domain/auth/services/LoginService";
import { RegisterService } from "../domain/auth/services/RegisterService";
import { BcryptService } from "../common/services/bcrypt.service";
import { JWTService } from "../common/services/jwt.service";
import { asyncHandler } from "../common/utils/asyncHandler.common";

const router = Router();

const bcryptService = new BcryptService();
const jwtService = new JWTService();

const loginService = new LoginService(bcryptService, jwtService);
const registerService = new RegisterService(bcryptService);

const registerController = new RegisterController(registerService);
const loginController = new LoginController(loginService);

router.post(
  "/register",
  [...registerValidation, validationErrorsHandler],
  asyncHandler(registerController.handle)
);

router.post(
  "/login",
  [...loginValidation, validationErrorsHandler],
  asyncHandler(loginController.handle)
);

export default router;
