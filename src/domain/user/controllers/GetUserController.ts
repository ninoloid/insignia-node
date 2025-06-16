import { Request, Response } from "express";
import {
  GetUserRequestParam,
  GetUserResponseBody,
  IGetUserController,
} from "./IGetUserController";
import { IUserService } from "../services/IUserService";

export class GetUserController implements IGetUserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public handle = async (
    req: Request<any, any, GetUserRequestParam>,
    res: Response<GetUserResponseBody>
  ): Promise<Response> => {
    const { id } = req?.params;
    const { code, error, message, data } = await this.userService.getUser(id);

    return res.status(code).json({
      error,
      message,
      data,
    });
  };
}
