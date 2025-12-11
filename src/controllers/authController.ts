import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userService } from "../services/userService";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../utils/jwt";

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

        // Create tokens
        const accessToken = await createAccessToken({id: user.id, email: user.email});
        const refreshToken = await createRefreshToken({id: user.id, email: user.email});

        // Store refreshToken in Database
        user.refreshToken = refreshToken;
        userService.updateUser(user.id, user);

        // TODO: Send token as cookie
        // res.cookie("token", token, {
        //     httpOnly: true,
        //     secure: false, // true in production
        //     maxAge: 24 * 60 * 60 * 1000
        // });

        return res.json({accessToken, refreshToken});
    } catch(error) {
        return res.status(500).json(error);
    }

}

export const logout = async (req: Request, res: Response) => {
    const {token} = req.body;
    if(!token) {
        return res.status(400).json({message: "No token provided"});
    }

    try {
        const decoded = verifyRefreshToken(token) as {id: number};
        const user = await userService.getUserById(decoded.id);
        if(!user) return res.status(404).json({message: "User not found"});
        if(user.refreshToken !== token) return res.status(400).json({message: "Invalid token"});
        user.refreshToken = "";
        await userService.updateUser(decoded.id, user);
        return res.json({message: "Logged out successfully"});
    } catch(error) {
        return res.status(400).json({message: "Invalid token"});
    }
}

export const refreshToken = async (req: Request, res: Response) => {
    const {token} = req.body;
    if(!token) {
        return res.status(401).json({message: "No token provided"});
    }
    try {
        const decoded = verifyRefreshToken(token) as {id: number};
        const user = await userService.getUserById(decoded.id);
        if(!user || user.refreshToken !== token) {
            return res.status(401).json({message: "Invalid refresh token"});
        }
        const accessToken = await createAccessToken({id: user.id, email: user.email});
        return res.json({accessToken});
    } catch(error) {
        return res.status(401).json(error);
    }
}
export const forgotPassword = async (req: Request, res: Response) => {}
export const changePassword = async (req: Request, res: Response) => {}