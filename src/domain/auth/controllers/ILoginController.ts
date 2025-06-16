import { Request, Response } from "express";

export interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginData {
  token: string;
}

export interface LoginResponseBody {
  error: boolean;
  message: string;
  data?: LoginData;
}

export interface ILoginController {
  handle(
    req: Request<any, any, LoginRequestBody>,
    res: Response<LoginResponseBody>
  ): Promise<Response>;
}
