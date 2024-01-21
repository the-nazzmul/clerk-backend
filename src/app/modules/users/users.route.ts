import express from "express";
import { UserControllers } from "./users.controller";

const router = express.Router();

router.post("/register", UserControllers.createUser);
router.post("/social-login", UserControllers.socialLogin);

export const UserRoutes = router;
