import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("modaretor")
export class ModaretorEntity{
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

     @Column()
     filename: string;

}