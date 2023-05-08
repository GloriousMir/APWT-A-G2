import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class LoginDto{
    @IsEmail() 
    email: string;
    @Length(4,8)
    password: string;
}