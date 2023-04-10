import { IsEmail } from "class-validator";


export class ModaretorDto{
   
    name : string;
    @IsEmail() 
    email: string;
    
    password: string;
    
    address: string;

    filename: string; 
}