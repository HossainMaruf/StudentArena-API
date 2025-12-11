import { Router } from "express";
import { register, login, logout, forgotPassword, changePassword, refreshToken } from "../controllers/authController";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refreshToken);
router.post("/forgotpassword", forgotPassword);
router.post("/changepassword", changePassword);

export default router;