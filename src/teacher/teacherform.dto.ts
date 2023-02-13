import { IsNotEmpty, IsString, MinLength, MaxLength, Matches, IsEmail } from "class-validator";

export class UserDTO {
  @IsNotEmpty({ message: "First name is required" })
  @IsString({ message: "First name must be a string" })
  @MinLength(2, { message: "First name must be at least 2 characters long" })
  @MaxLength(30, { message: "First name cannot exceed 30 characters" })
  firstName: string;

  @IsNotEmpty({ message: "Last name is required" })
  @IsString({ message: "Last name must be a string" })
  @MinLength(2, { message: "Last name must be at least 2 characters long" })
  @MaxLength(30, { message: "Last name cannot exceed 30 characters" })
  lastName: string;

  @IsNotEmpty({ message: "Email is required" })
  @IsEmail({}, { message: "Email must be a valid format" })
  email: string;

  @IsNotEmpty({ message: "Password is required" })
  @IsString({ message: "Password must be a string" })
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  @MaxLength(30, { message: "Password cannot exceed 30 characters" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character" })
  password: string;
}
