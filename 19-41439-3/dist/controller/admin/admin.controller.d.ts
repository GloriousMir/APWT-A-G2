import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { StudentService } from 'src/services/student/student.service';
import { TeacherService } from 'src/services/teacher/teacher.service';
export declare class AdminController {
    private adminService;
    private studentService;
    private teacherService;
    constructor(adminService: AdminService, studentService: StudentService, teacherService: TeacherService);
    getAdmin(): Promise<import("../../Entities/adminentity.entity").AdminEntity[]>;
    insertAdmin(mydto: AdminDto): any;
    getAdminByID(id: number): any;
    getAdminByIDName(qry: any): any;
    updateAdmin(name: string, id: number): any;
    deleteAdminbyid(id: number): any;
    getStudent(): Promise<StudentEntity[]>;
    insertStudent(StudentDto: StudentEntity): any;
    getStudentByAdminID(id: number): any;
    getStudentByID(id: number): any;
    deleteStudentbyid(id: number): any;
}
