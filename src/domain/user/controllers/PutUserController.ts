import { Request, Response } from "express";
import { IUserService } from "../services/IUserService";
import {
  IPutUserController,
  PutUserRequestBody,
  PutUserRequestParam,
  PutUserResponseBody,
} from "./IPutUserController";

export class PutUserController implements IPutUserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public handle = async (
    req: Request<any, any, PutUserRequestBody & PutUserRequestParam>,
    res: Response<PutUserResponseBody>
  ): Promise<Response> => {
    const { id } = req?.params;
    const { name, email } = req?.body;
    const { code, error, message } = await this.userService.putUser(
      id,
      name,
      email
    );

    return res.status(code).json({
      error,
      message,
    });
  };
}
