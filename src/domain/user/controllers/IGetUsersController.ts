import { Request, Response } from "express";
import { IUser } from "../models/User";

export interface GetUsersResponseBody {
  error: boolean;
  message: string;
  data?: IUser[];
}

export interface IGetUsersController {
  handle(req: Request, res: Response<GetUsersResponseBody>): Promise<Response>;
}
