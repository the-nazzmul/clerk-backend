import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode;
  let message = err.message;
  let error = err;

  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

export default globalErrorHandler;
