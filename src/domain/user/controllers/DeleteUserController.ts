import { Request, Response } from "express";
import { IUserService } from "../services/IUserService";
import {
  DeleteUserRequestParam,
  DeleteUserResponseBody,
  IDeleteUserController,
} from "./IDeleteUserController";

export class DeleteUserController implements IDeleteUserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public handle = async (
    req: Request<any, any, DeleteUserRequestParam>,
    res: Response<DeleteUserResponseBody>
  ): Promise<Response> => {
    const { id } = req?.params;
    const { code, error, message } = await this.userService.deleteUser(id);

    return res.status(code).json({
      error,
      message,
    });
  };
}
