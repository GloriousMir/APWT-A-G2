import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, Length, Matches } from "class-validator";
import { NoticeDto } from "./noticeDto.dto";

export class ExpertInfoDTO {


  @IsInt({ message: 'ID must be a number' })
  Fid: number;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  Fidd: number;

  @IsNotEmpty()
  @IsAlpha()
  Fname: string;

  @IsNotEmpty()
  @IsAlpha()
  Fprogram: string;

  @IsNotEmpty()
  @IsAlpha()
  Fdep: string;

  @IsNotEmpty()
  @IsAlpha()
  Faddress: string;

  @IsNotEmpty()
  @IsPhoneNumber('BD', { message: 'Phone number is not valid' })
  Fnum: number;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  Fsal: number;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  expertNotices: NoticeDto[];
}