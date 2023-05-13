import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    // insertStudent(mydto:StudentDto):any 
    // {
    //     const studentaccount = new StudentEntity()
    //     studentaccount.StudentName = mydto.StudentName;
    //     studentaccount.StudentEmail = mydto.StudentEmail;
    //     studentaccount.InstituteName = mydto.InstituteName;
    //     studentaccount.Address = mydto.Address;
    //     studentaccount.PhoneNumber = mydto.PhoneNumber;
    //     studentaccount.Username = mydto.Username;
    //     studentaccount.password = mydto.password;
    //    return this.studentRepo.save(studentaccount);
    // }
 
    getAdminByStudentID(id):any 
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
    async getStudentByID(id) {
        const data=await this.studentRepo.findOneBy({ id });
        console.log(data);
        if(data!==null) {
            return data;
        }
       else 
       {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
       }
    }
    // getStudentByID(id):any
    // {
    //     return this.studentRepo.findOneBy(id);
    // }
    deleteStudentbyid(id):any {
    
        return this.studentRepo.delete(id);
    }
}
