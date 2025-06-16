import bcrypt from "bcryptjs";

export class BcryptService {
  async compare(password: string, userPassword: string) {
    return bcrypt.compare(password, userPassword);
  }

  async hash(password: string, salt: number | string = 10) {
    return bcrypt.hash(password, salt);
  }
}
