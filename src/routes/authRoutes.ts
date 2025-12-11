import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { register, login, logout, forgotPassword, changePassword } from "../controllers/authController";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/forgotpassword", forgotPassword);
router.post("/changepassword", changePassword);

export default router;