import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('RequestQuestion')
export class RequestQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Fid: number;

  @Column()
  question: string;

  @Column()
  reason: string;

  @Column()
  date: Date;

  @Column()
  time: Date;
}
