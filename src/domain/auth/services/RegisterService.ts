import { HttpStatus } from "../../../common/constants/http.constant";
import { BcryptService } from "../../../common/services/bcrypt.service";
import { JWTService } from "../../../common/services/jwt.service";
import { User } from "../../user/models/User";
import { ILoginService, LoginResult } from "./ILoginService";
import { IregisterService, RegisterResult } from "./IRegisterService";

export class RegisterService implements IregisterService {
  private bcryptService: BcryptService;

  constructor(bcryptService: BcryptService) {
    this.bcryptService = bcryptService;
  }

  async register(
    name: string,
    email: string,
    password: string
  ): Promise<RegisterResult> {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return {
          code: HttpStatus.BAD_REQUEST,
          error: true,
          message: "Email already registered",
        };

      const hashedPassword = await this.bcryptService.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      return {
        code: HttpStatus.CREATED,
        error: false,
        message: "User registered successfully",
        data: { id: newUser._id.toString(), email: newUser.email },
      };
    } catch (err: any) {
      console.log(`Register service error: ${err.message}`);

      return {
        code: HttpStatus.INTERNAL_ERROR,
        error: true,
        message: "Server error",
      };
    }
  }
}
