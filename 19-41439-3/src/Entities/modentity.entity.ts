import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "./studententity.entity";
import { TeacherEntity } from "./teacherentity.entity";

@Entity("mod")
export class ModEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    
    @Column()
    phone: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @OneToMany(() => TeacherEntity, (teacher) => teacher.mod)
    teachers: TeacherEntity[];
}