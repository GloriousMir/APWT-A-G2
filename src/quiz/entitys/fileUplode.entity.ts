import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fileuplode')
export class FileUplode {
  @PrimaryGeneratedColumn()
  fileid: number;

  @Column()
  files: string;
}