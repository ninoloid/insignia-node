import { Request, Response } from "express";
import {
  GetUsersResponseBody,
  IGetUsersController,
} from "./IGetUsersController";
import { IUserService } from "../services/IUserService";

export class GetUsersController implements IGetUsersController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public handle = async (
    req: Request,
    res: Response<GetUsersResponseBody>
  ): Promise<Response> => {
    const { id } = req?.params;
    const { code, error, message, data } = await this.userService.getUsers();

    return res.status(code).json({
      error,
      message,
      data,
    });
  };
}
