import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherDto } from 'src/DTOs/teacherDTO.dto';
import { TeacherEntity } from 'src/Entities/teacherentity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(TeacherEntity)
        private teacherRepo: Repository<TeacherEntity>,
      ) {}

    insertTeacher(mydto:TeacherDto):any 
    {
     return this.teacherRepo.save(mydto);
    }

    getAdminByTeacherID(id):any 
    {
     return this.teacherRepo.find({ 
        where: {id:id},
        relations: {
        admin: true,
             },
        });
    }
    getTeacher()
    {
        return this.teacherRepo.find();
    }
    deleteTeacherbyid(id):any {
    
        return this.teacherRepo.delete(id);
    }
}
