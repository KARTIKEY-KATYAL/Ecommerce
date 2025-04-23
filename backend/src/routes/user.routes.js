import express from "express";
import {upload} from "../middleware/upload.middleware.js"
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
} from "../controllers/user.controller.js";

const router = express();

router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  RegisterUser
);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);

export default router;
