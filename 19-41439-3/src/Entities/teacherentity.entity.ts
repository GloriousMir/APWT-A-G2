import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./adminentity.entity";
import { ModEntity } from "./modentity.entity";

@Entity('teacher')
export class TeacherEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    TeacherName: string;
  
    @Column()
    TeacherEmail: string;
    
    @Column()
    InstituteName: string;

    @Column()
    Address: string;

    @Column()
    PhoneNumber: string;

    @Column()
    Username: string;

    @Column()
    password: string;

    @ManyToOne(() => AdminEntity, (admin) => admin.teachers)
    admin: AdminEntity

    @ManyToOne(() => ModEntity, (mod) => mod.teachers)
    mod: ModEntity
}