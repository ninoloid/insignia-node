import { HttpStatus } from "../../../common/constants/http.constant";

export interface RegisterResult {
  code: HttpStatus;
  error: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
  };
}

export interface IregisterService {
  register(
    name: string,
    email: string,
    password: string
  ): Promise<RegisterResult>;
}
