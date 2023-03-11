import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class AdminDto{
    @IsNotEmpty({message: 'Name can not be empty'})
    name : string;
    @IsEmail() 
    email: string;
    @Length(4,8)
    password: string;
    
    address: string;

    // filename: string; 
}