import { StudentDto } from 'src/DTOs/studentDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepo;
    constructor(studentRepo: Repository<StudentEntity>);
    insertStudent(mydto: StudentDto): any;
    getAdminByStudentID(id: any): any;
    getStudent(): Promise<StudentEntity[]>;
    getStudentByID(id: any): any;
    deleteStudentbyid(id: any): any;
}
