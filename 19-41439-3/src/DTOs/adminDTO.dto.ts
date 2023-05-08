import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class AdminDto{
    
    name : string;
    @IsEmail() 
    email: string;
    @Length(4,8)
    password: string;
    
    address: string;

    filename: string; 
}