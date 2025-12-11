import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { env } from "../config/env";
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

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        // Find User
        const user = await userService.getUserByEmail(email);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        // Compare password
        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return res.status(400).json({message: "Invalid Credentials"});

        // Create JWT
        const token = (jwt as any).sign({id: user.id, email: user.email}, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN});

        // Send token as cookie (optional)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production
            maxAge: 24 * 60 * 60 * 1000
        });
        return res.json({message: "Login Success", token});
    } catch(error) {
        return res.status(500).json({error});
    }

}
export const logout = async (req: Request, res: Response) => {}
export const forgotPassword = async (req: Request, res: Response) => {}
export const changePassword = async (req: Request, res: Response) => {}