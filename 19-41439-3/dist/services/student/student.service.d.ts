import { StudentDto } from 'src/DTOs/studentDTO.dto';
import { StudentUpdate } from 'src/DTOs/studentUpdate.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepo;
    constructor(studentRepo: Repository<StudentEntity>);
    insertStudent(mydto: StudentDto): any;
    getAdminByStudentID(id: any): any;
    getStudent(): Promise<StudentEntity[]>;
    getStudentByID(id: any): Promise<StudentEntity>;
    deleteStudentbyid(id: any): any;
    updateStudentbyid(mydto: StudentUpdate, id: any): any;
}
