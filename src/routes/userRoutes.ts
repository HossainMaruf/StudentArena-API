import { Router } from "express";
import { createUser, deleteUser, getUserById, getUserByEmail, getUsers, updateUser, getUserWithPosts } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/email/:email", getUserByEmail);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/posts", getUserWithPosts);

export default router;