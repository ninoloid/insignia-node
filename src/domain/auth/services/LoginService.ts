import { HttpStatus } from "../../../common/constants/http.constant";
import { BcryptService } from "../../../common/services/bcrypt.service";
import { JWTService } from "../../../common/services/jwt.service";
import { User } from "../../user/models/User";
import { ILoginService, LoginResult } from "./ILoginService";

export class LoginService implements ILoginService {
  private bcryptService: BcryptService;
  private jwtService: JWTService;

  constructor(bcryptService: BcryptService, jwtService: JWTService) {
    this.bcryptService = bcryptService;
    this.jwtService = jwtService;
  }

  async login(email: string, password: string): Promise<LoginResult> {
    try {
      const user = await User.findOne({ email });
      if (!user)
        return {
          code: HttpStatus.BAD_REQUEST,
          error: true,
          message: "Invalid credentials",
        };

      const isMatch = await this.bcryptService.compare(password, user.password);

      if (!isMatch)
        return {
          code: HttpStatus.BAD_REQUEST,
          error: true,
          message: "Invalid credentials",
        };

      const token = this.jwtService.sign({
        id: user._id,
        name: user.name,
        email: user.email,
      });

      return {
        code: HttpStatus.OK,
        error: false,
        message: "Login successful",
        data: {
          token,
        },
      };
    } catch (err: any) {
      console.log(`Login service error: ${err.message}`);

      return {
        code: HttpStatus.INTERNAL_ERROR,
        error: true,
        message: "Internal Server Error",
      };
    }
  }
}
