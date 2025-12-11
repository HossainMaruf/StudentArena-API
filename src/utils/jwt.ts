import jwt from 'jsonwebtoken';
import {env} from '../config/env';

const bearer = "Bearer ";

export const createAccessToken = async (user: {id: number, email: string}) => {
    return bearer + (jwt as any).sign(
        {id: user.id, email: user.email},
        env.JWT_SECRET,
        {expiresIn: env.JWT_EXPIRES_IN}
    );
}

export const createRefreshToken = async (user: {id: number, email: string}) => {
    return bearer + (jwt as any).sign(
        {id: user.id, email: user.email},
        env.REFRESH_SECRET,
        {expiresIn: env.REFRESH_EXPIRES_IN}
    );
}

export const verifyAccessToken = (token: string) => {
    token = removeBearer(token);
    return jwt.verify(token, env.JWT_SECRET);
}

export const verifyRefreshToken = (token: string) => {
    token = removeBearer(token);
    return jwt.verify(token, env.REFRESH_SECRET);
}

const removeBearer = (token: string) => {
    return token.split(" ")[1];
}