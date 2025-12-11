import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { env } from "../config/env";
import { User } from "../entities/User";
import { userService } from "../services/userService";

export interface AuthRequest extends Request {
    user?: User;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        // TODO: cookie system
        // Get token from header
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({message: "Unauthorized: No token"});
        }

        const token = authHeader.split(" ")[1];

        // Verify JWT
        const decoded  = jwt.verify(token, env.JWT_SECRET) as {id: number};
        // Fetch the user
        const user = await userService.getUserById(decoded.id);
        if(!user) return res.status(401).json({message: "Unauthorized: User not found"});

        // Attach user to request;
        req.user = user;
        next();
    } catch(error) {
        res.status(500).json(error);
    }
}