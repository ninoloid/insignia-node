import { Request, Response } from "express";
import {
  ILoginController,
  LoginRequestBody,
  LoginResponseBody,
} from "./ILoginController";
import { ILoginService } from "../services/ILoginService";

export class LoginController implements ILoginController {
  private loginService: ILoginService;

  constructor(loginService: ILoginService) {
    this.loginService = loginService;
  }

  public handle = async (
    req: Request<any, any, LoginRequestBody>,
    res: Response<LoginResponseBody>
  ): Promise<Response> => {
    const { email, password } = req?.body;
    const { code, error, message, data } = await this.loginService.login(
      email,
      password
    );

    return res.status(code).json({
      error,
      message,
      data,
    });
  };
}
