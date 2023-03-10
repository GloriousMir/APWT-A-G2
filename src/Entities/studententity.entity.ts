import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./adminentity.entity";

@Entity("student")
export class StudentEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    StudentName: string;
  
    @Column()
    StudentEmail: string;
    
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

    @ManyToOne(() => AdminEntity, (admin) => admin.students)
    admin: AdminEntity
}