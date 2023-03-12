import { IsAlpha, IsInt, IsLowercase, IsNotEmpty } from "class-validator";

export class NoticeDto {
  id: number;
  @IsNotEmpty()

  @IsNotEmpty()
  @IsAlpha()
  @IsLowercase({ message: 'Name must be lowercase' })
  subject: string;

  @IsNotEmpty()
  Details: string;

  
}