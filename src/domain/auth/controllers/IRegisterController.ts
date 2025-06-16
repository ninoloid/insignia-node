import { Request, Response } from "express";

export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponseBody {
  error: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
  };
}

export interface IRegisterController {
  handle(
    req: Request<any, any, RegisterRequestBody>,
    res: Response<RegisterResponseBody>
  ): Promise<Response>;
}
