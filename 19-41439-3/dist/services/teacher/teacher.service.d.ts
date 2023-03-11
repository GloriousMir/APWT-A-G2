import { TeacherDto } from 'src/DTOs/teacherDTO.dto';
import { TeacherEntity } from 'src/Entities/teacherentity.entity';
import { Repository } from 'typeorm';
export declare class TeacherService {
    private teacherRepo;
    constructor(teacherRepo: Repository<TeacherEntity>);
    insertTeacher(mydto: TeacherDto): any;
    getAdminByTeacherID(id: any): any;
    getAllTeacher(): Promise<TeacherEntity[]>;
    getTeachertByID(id: any): any;
    deleteTeacherbyid(id: any): any;
}
