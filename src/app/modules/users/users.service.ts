import sendResponse from "../../utils/sendResponse";
import { IUser } from "./users.interface";
import { UserModel } from "./users.model";

const createUserInDB = async (payload: IUser) => {
  const existingUser = await UserModel.findOne({ email: payload.email });

  if (existingUser) {
    throw new Error("User already exists!");
  }

  const result = await UserModel.create(payload);

  return result;
};

const socialLoginInBD = async (payload: IUser) => {
  const existingUser = await UserModel.findOne({ email: payload.email });
  if (existingUser) {
    return;
  }
  const result = await UserModel.create(payload);
  return result;
};

export const UserServices = {
  createUserInDB,
  socialLoginInBD,
};
