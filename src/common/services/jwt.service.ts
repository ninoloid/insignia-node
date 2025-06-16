import jwt from "jsonwebtoken";

export class JWTService {
  private jwtSecret = process.env.JWT_SECRET || "secretkey";

  sign(payload: any) {
    return jwt.sign(payload, this.jwtSecret, {
      expiresIn: "1d",
    });
  }
}
