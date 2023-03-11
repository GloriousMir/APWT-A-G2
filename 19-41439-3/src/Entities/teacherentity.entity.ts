import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./adminentity.entity";

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
}