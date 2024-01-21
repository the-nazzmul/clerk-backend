import { Schema, model } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
});

export const UserModel = model<IUser>("Users", userSchema);
