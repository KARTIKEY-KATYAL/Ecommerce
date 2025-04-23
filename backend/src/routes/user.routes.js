import express from "express";
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
} from "../controllers/user.controller.js";

const router = express();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);

export default router;
