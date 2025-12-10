import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser, getUserWithPosts } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/posts", getUserWithPosts);

export default router;