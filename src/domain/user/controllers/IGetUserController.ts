import { Request, Response } from "express";
import { IUser } from "../models/User";

export interface GetUserRequestParam {
  id: string;
}

export interface GetUserResponseBody {
  error: boolean;
  message: string;
  data?: IUser;
}

export interface IGetUserController {
  handle(
    req: Request<any, any, GetUserRequestParam>,
    res: Response<GetUserResponseBody>
  ): Promise<Response>;
}
