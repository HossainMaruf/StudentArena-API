import { Router } from "express";
import { createPost, deletePost, getPost, getPosts, getPostWithUser, updatePost } from "../controllers/postController";

const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id/user", getPostWithUser);

export default router;