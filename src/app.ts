import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/users/users.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Nazmul!");
});

app.use(globalErrorHandler);

export default app;
