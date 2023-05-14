import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherDto } from 'src/DTOs/teacherDTO.dto';
import { TeacherUpdate } from 'src/DTOs/teacherUpdate.dto';
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
    getAllTeacher()
    {
        return this.teacherRepo.find();
    }
    getTeachertByID(id):any
    {
        return this.teacherRepo.findOneBy(id);
    }
    deleteTeacherbyid(id):any {
    
        return this.teacherRepo.delete(id);
    }
    updateTeacherbyid(mydto:TeacherUpdate,id):any {
        try {
            return this.teacherRepo.update(id,mydto);
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException();
        }
}
}
