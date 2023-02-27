import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "./studententity.entity";

@Entity("admin")
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @Column()
    address: string;

    @OneToMany(() => StudentEntity, (student) => student.admin)
    students: StudentEntity[]
}