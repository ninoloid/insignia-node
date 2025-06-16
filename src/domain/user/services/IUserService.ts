import { HttpStatus } from "../../../common/constants/http.constant";
import { IUser } from "../models/User";

export interface GetUserResult {
  code: HttpStatus;
  error: boolean;
  message: string;
  data?: IUser;
}

export interface GetUsersResult {
  code: HttpStatus;
  error: boolean;
  message: string;
  data?: IUser[];
}

export interface PutUserResult {
  code: HttpStatus;
  error: boolean;
  message: string;
}

export interface DeleteUserResult {
  code: HttpStatus;
  error: boolean;
  message: string;
}

export interface IUserService {
  getUser(id: string): Promise<GetUserResult>;
  getUsers(): Promise<GetUsersResult>;
  putUser(id: string, name?: string, email?: string): Promise<PutUserResult>;
  deleteUser(id: string): Promise<DeleteUserResult>;
}
