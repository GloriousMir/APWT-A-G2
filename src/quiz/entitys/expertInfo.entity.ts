import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExpertNotice } from './expertNotice.entity';

@Entity('expertinfo')
export class ExpertInfo {
  @PrimaryGeneratedColumn()
  Fid: number;

  @Column()
  Fidd: number;

  @Column()
  Fname: string;

  @Column()
  Fprogram: string;

  @Column()
  Fdep: string;

  @Column()
  Faddress: string;

  @Column()
  Fnum: number;

  @Column()
  dob: Date;

  @Column()
  Fsal: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(
    () => ExpertNotice,
    (ExpertNotice) => ExpertNotice.expertinfo,
    { cascade: true },
  )
  expertNotices: ExpertNotice[];
}