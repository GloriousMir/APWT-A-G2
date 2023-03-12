import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gradeInfo')
export class gradeInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  curseId: number;

  @Column()
  subject: string;

  @Column()
  grade: string;
}
