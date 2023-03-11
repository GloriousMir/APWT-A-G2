import { TeacherDto } from 'src/DTOs/teacherDTO.dto';
import { TeacherEntity } from 'src/Entities/teacherentity.entity';
import { Repository } from 'typeorm';
export declare class TeacherService {
    private teacherRepo;
    constructor(teacherRepo: Repository<TeacherEntity>);
    insertTeacher(mydto: TeacherDto): any;
    getAdminByTeacherID(id: any): any;
    getTeacher(): Promise<TeacherEntity[]>;
    deleteTeacherbyid(id: any): any;
}
