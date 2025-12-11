import { IsEmail, IsString, MinLength, MaxLength } from "class-validator";

export class UserRegistrationDto {
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name!: string;

    @IsEmail({}, {message: "Invalid email address"})
    email!: string;

    @IsString()
    @MinLength(6, {message: "Password length must be at least 6 characters"})
    @MaxLength(256, {message: "Password length at most 256 characters"})
    password!: string
}