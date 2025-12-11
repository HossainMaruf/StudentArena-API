import dotenv from 'dotenv';
dotenv.config();


export const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: Number(process.env.PORT || 5000),
    
    DB_TYPE: process.env.DB_TYPE || "mysql",
    DB_HOST: process.env.DB_HOST!,
    DB_PORT: Number(process.env.DB_PORT || 3306),
    DB_USERNAME: process.env.DB_USERNAME!,
    DB_PASSWORD: process.env.DB_PASSWORD!,
    DB_NAME: process.env.DB_NAME!,

    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h"
}