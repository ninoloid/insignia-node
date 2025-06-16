import { HttpStatus } from "../../../common/constants/http.constant";
import { User } from "../../user/models/User";
import { GetUserResult, GetUsersResult, IUserService } from "./IUserService";

export class UserService implements IUserService {
  async getUser(id: string): Promise<GetUserResult> {
    try {
      const user = await User.findOne({ _id: id }).select([
        "-password",
        "-deleted",
      ]);

      if (!user) {
        return {
          code: HttpStatus.NOT_FOUND,
          error: true,
          message: "User not found",
        };
      }

      return {
        code: HttpStatus.OK,
        error: false,
        message: "Sucess",
        data: user,
      };
    } catch (err: any) {
      console.log(`getUser of User service error: ${err.message}`);

      return {
        code: HttpStatus.INTERNAL_ERROR,
        error: true,
        message: "Internal Server Error",
      };
    }
  }

  async getUsers(): Promise<GetUsersResult> {
    try {
      const users = await User.find().select(["-password", "-deleted"]);

      return {
        code: HttpStatus.OK,
        error: false,
        message: "Sucess",
        data: users,
      };
    } catch (err: any) {
      console.log(`getUsers of User service error: ${err.message}`);

      return {
        code: HttpStatus.INTERNAL_ERROR,
        error: true,
        message: "Internal Server Error",
      };
    }
  }

  async putUser(
    id: string,
    name?: string,
    email?: string
  ): Promise<GetUsersResult> {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { ...(name && { name }), ...(email && { email }) },
        { new: true }
      );

      if (!updatedUser) {
        return {
          code: HttpStatus.NOT_FOUND,
          error: true,
          message: "User not found",
        };
      }

      return {
        code: HttpStatus.OK,
        error: false,
        message: "User updated successfully",
      };
    } catch (err: any) {
      console.log(`putUser of User service error: ${err.message}`);

      return {
        code: HttpStatus.INTERNAL_ERROR,
        error: true,
        message: "Internal Server Error",
      };
    }
  }

  async deleteUser(id: string): Promise<GetUserResult> {
    try {
      const result = await User.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return {
          code: 404,
          error: true,
          message: "User not found",
        };
      }

      return {
        code: 200,
        error: false,
        message: "User deleted",
      };
    } catch (err: any) {
      console.log(`deleteUser of User service error: ${err.message}`);

      return {
        code: HttpStatus.INTERNAL_ERROR,
        error: true,
        message: "Internal Server Error",
      };
    }
  }
}
