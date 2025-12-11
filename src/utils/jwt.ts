import jwt from 'jsonwebtoken';
import {env} from '../config/env';

export const createAccessToken = async (user: {id: number, email: string}) => {
    return (jwt as any).sign(
        {id: user.id, email: user.email},
        env.JWT_SECRET,
        {expiresIn: env.JWT_EXPIRES_IN}
    );
}

export const createRefreshToken = async (user: {id: number, email: string}) => {
    return (jwt as any).sign(
        {id: user.id, email: user.email},
        env.REFRESH_SECRET,
        {expiresIn: env.REFRESH_EXPIRES_IN}
    );
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, env.JWT_SECRET);
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, env.REFRESH_SECRET);
}