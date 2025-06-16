import { Request, Response } from "express";
import { IUser } from "../models/User";

export interface PutUserRequestParam {
  id: string;
}

export interface PutUserRequestBody {
  name?: string;
  email?: string;
}

export interface PutUserResponseBody {
  error: boolean;
  message: string;
}

export interface IPutUserController {
  handle(
    req: Request<any, any, PutUserRequestBody & PutUserRequestParam>,
    res: Response<PutUserResponseBody>
  ): Promise<Response>;
}
