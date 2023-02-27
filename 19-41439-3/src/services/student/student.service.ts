import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDto } from 'src/DTOs/studentDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentEntity)
        private studentRepo: Repository<StudentEntity>,
      ) {}

    insertStudent(mydto:StudentDto):any 
    {
     return this.studentRepo.save(mydto);
    }

    getAdminByManagerID(id):any 
    {
     return this.studentRepo.find({ 
        where: {id:id},
        relations: {
        admin: true,
             },
        });
    }
    
    getStudent()
    {
        return this.studentRepo.find();
    }
    deleteStudentbyid(id):any {
    
        return this.studentRepo.delete(id);
    }
}
