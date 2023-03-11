import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class ModDto{
    @IsNotEmpty({message: 'Name can not be empty'})
    name : string;


    phone: string;

    @IsEmail() 
    email: string;

    @Length(4,8)
    password: string;

}