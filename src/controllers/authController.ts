import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userService } from "../services/userService";

export const register = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await userService.getUserByEmail(email);
        if(user) {
            return res.status(404).json({message: "Email already used"});
        }
        const hashed = await bcrypt.hash(password, 10);
        req.body.password = hashed;
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch(error) {
        return res.status(500).json({error});
    }
}

export const login = async (req: Request, res: Response) => {}
export const logout = async (req: Request, res: Response) => {}
export const forgotPassword = async (req: Request, res: Response) => {}
export const changePassword = async (req: Request, res: Response) => {}