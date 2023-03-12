import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExpertInfo } from './expertInfo.entity';

@Entity('expertNotice')
export class ExpertNotice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;

  @Column()
  Details: string;

  @ManyToOne(() => ExpertInfo, (ExpertInfo) => 
  ExpertInfo.expertNotices)
  expertinfo: ExpertInfo;
}