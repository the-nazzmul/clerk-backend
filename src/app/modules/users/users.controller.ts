import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./users.service";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserInDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User created successfully!",
    data: result,
  });
});

const socialLogin = catchAsync(async (req, res) => {
  const result = await UserServices.socialLoginInBD(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User created successfully!",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  socialLogin,
};
