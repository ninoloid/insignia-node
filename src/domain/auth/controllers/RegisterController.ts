import { Request, Response } from "express";
import {
  IRegisterController,
  RegisterRequestBody,
  RegisterResponseBody,
} from "./IRegisterController";
import { IregisterService } from "../services/IRegisterService";

export class RegisterController implements IRegisterController {
  private registerService: IregisterService;

  constructor(registerService: IregisterService) {
    this.registerService = registerService;
  }

  public handle = async (
    req: Request<any, any, RegisterRequestBody>,
    res: Response<RegisterResponseBody>
  ): Promise<Response> => {
    const { name, email, password } = req?.body;

    const { code, error, message, data } = await this.registerService.register(
      name,
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
