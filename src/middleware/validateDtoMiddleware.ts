import { plainToInstance } from "class-transformer";
import {validate} from 'class-validator';
import {Request, Response, NextFunction} from 'express';

export const validateDtoMiddleware = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const output = plainToInstance(dtoClass, req.body);
        const errors = await validate(output, {whitelist: true}); // whitelist: true removes any fields not in the DTO security
        if(errors.length > 0) {
            const messages = errors.map(error => ({
                field: error.property,
                error: Object.values(error.constraints || {})[0]
            }));

            return res.status(422).json({
                message: "Validation Failed",
                errors: messages
            });
        }
        req.body = output;
        next();
    }
}