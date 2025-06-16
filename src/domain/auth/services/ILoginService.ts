import { HttpStatus } from "../../../common/constants/http.constant";

export interface LoginResult {
  code: HttpStatus;
  error: boolean;
  message: string;
  data?: { token: string };
}

export interface ILoginService {
  login(email: string, password: string): Promise<LoginResult>;
}
