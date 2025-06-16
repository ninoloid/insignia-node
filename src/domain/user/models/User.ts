import { Schema, model } from "mongoose";
import mongooseDelete from "mongoose-delete";

interface IUserDBData {
  name: string;
  email: string;
  password: string;
}

export type IUser = Pick<IUserDBData, "name" | "email">;

const userSchema = new Schema<IUserDBData>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
  },
  { timestamps: true }
);

userSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

export const User = model<IUserDBData>("User", userSchema);
