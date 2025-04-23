import express from "express"
import { LoginUser, LogoutUser, RegisterUser } from "../src/controllers/user.controller"

const router = express()

router.post("/register",RegisterUser)
router.post("/login",LoginUser)
router.get("/logout",LogoutUser)

export default router
