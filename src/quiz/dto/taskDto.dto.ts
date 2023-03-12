import { IsAlpha, IsInt, IsNotEmpty } from "class-validator";

export class TaskDto {
  id: number;
  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  courseId: number;

  @IsNotEmpty()
  @IsAlpha()
  subject: string;

  @IsNotEmpty()
  @IsAlpha()
  Details: string;

  @IsNotEmpty()
  created_date: Date;

  @IsNotEmpty()
  due_date: Date;
}
