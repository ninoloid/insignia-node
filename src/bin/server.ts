import express, { Application } from "express";
import cors from "cors";
import authRouter from "../routes/auth.routes";
import userRouter from "../routes/user.routes";

export class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.get("/health-check", (req, res) => {
      res.status(200).json({
        status: "healthy",
      });
    });

    this.app.use("/auth", authRouter);
    this.app.use("/users", userRouter);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
