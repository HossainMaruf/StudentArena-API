import { Request, Response } from "express";
import { userService } from "../services/userService"

export const getUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsers();
    res.json(users);
}

export const getUser = async (req: Request, res: Response) => {
    const user = await userService.getUserById(parseInt(req.params.id));
    if(!user) return res.status(404).json({message: "User not found"});
    res.json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
}

export const updateUser = async (req: Request, res: Response) => {
    const user = await userService.updateUser(parseInt(req.params.id), req.body);
    if(!user) return res.status(404).json({message: "User not found"});
    res.json(user);
}

export const deleteUser = async (req: Request, res: Response) => {
    const deleted = await userService.deleteUser(parseInt(req.params.id));
    if(!deleted) return res.status(404).json({message: "User not found"});
    res.json({message: "User deleted successfully"});
}