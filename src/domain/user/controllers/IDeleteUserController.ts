import { Request, Response } from "express";

export interface DeleteUserRequestParam {
  id: string;
}

export interface DeleteUserResponseBody {
  error: boolean;
  message: string;
}

export interface IDeleteUserController {
  handle(
    req: Request<any, any, DeleteUserRequestParam>,
    res: Response<DeleteUserResponseBody>
  ): Promise<Response>;
}
