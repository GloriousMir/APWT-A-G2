import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
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
    
    async getTeachertByID(id) {
        const data=await this.teacherRepo.findOneBy({ id });
        console.log(data);
        if(data!==null) {
            return data;
        }
       else 
       {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
       }
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
