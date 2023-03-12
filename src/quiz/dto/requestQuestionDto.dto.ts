import { IsAlpha, IsInt, IsNotEmpty } from "class-validator";

export class RequestRoomDto {
  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  id: number;
    
  @IsNotEmpty()
  Fid: number;

  @IsNotEmpty()
  @IsAlpha()
  question: string;

  @IsNotEmpty()
  @IsAlpha()
  reason: string;

  @IsNotEmpty()
  @IsAlpha()
  date: Date;

  @IsNotEmpty()
  @IsAlpha()
  time: Date;

}