import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User";
import { userService } from "../services/userService";
import { verifyAccessToken } from "../utils/jwt";

export interface AuthRequest extends Request {
    user?: User;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        // TODO: cookie system
        // Get token from header
        const token = req.headers.authorization;
        if(!token || !token.startsWith("Bearer ")) {
            return res.status(401).json({message: "Unauthorized: No token"});
        }

        // Verify JWT
        const decoded  = verifyAccessToken(token) as {id: number};
        // Fetch the user
        const user = await userService.getUserById(decoded.id);
        if(!user) return res.status(401).json({message: "Unauthorized: User not found"});
        if(!user.refreshToken) return res.status(401).json({message: "Unauthorize: may be logged out"});

        // Attach user to request;
        req.user = user;
        next();
    } catch(error) {
        res.status(500).json(error);
    }
}