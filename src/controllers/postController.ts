import { Request, Response } from "express";
import { postService } from "../services/postService"

export const getPosts = async (req: Request, res: Response) => {
    const posts = await postService.getAllPosts();
    res.json(posts);
}

export const getPost = async (req: Request, res: Response) => {
    const post = await postService.getPostById(parseInt(req.params.id));
    if(!post) return res.status(404).json({message: "Post not found"});
    res.json(post);
}

export const createPost = async (req: Request, res: Response) => {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
}

export const updatePost = async (req: Request, res: Response) => {
    const post = await postService.updatePost(parseInt(req.params.id), req.body);
    if(!post) return res.status(404).json({message: "Post not found"});
    res.json(post);
}

export const deletePost = async (req: Request, res: Response) => {
    const deleted = await postService.deletePost(parseInt(req.params.id));
    if(!deleted) return res.status(404).json({message: "Post not found"});
    res.json({message: "Post deleted successfully"});
}

export const getPostWithUser = async (req: Request, res: Response) => {
    const post = await postService.getPostWithUser(parseInt(req.params.id));
    if(!post) return res.status(404).json({message: "Post not found"});
    res.json(post);
}