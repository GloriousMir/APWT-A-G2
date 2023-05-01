/// <reference types="multer" />
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { TeacherEntity } from 'src/Entities/teacherentity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { ModService } from 'src/services/mod/mod.service';
import { StudentService } from 'src/services/student/student.service';
import { TeacherService } from 'src/services/teacher/teacher.service';
export declare class AdminController {
    private adminService;
    private studentService;
    private teacherService;
    private modService;
    constructor(adminService: AdminService, studentService: StudentService, teacherService: TeacherService, modService: ModService);
    signup(mydto: AdminDto, file: Express.Multer.File): Promise<import("../../Entities/adminentity.entity").AdminEntity>;
    signin(session: any, mydto: AdminDto): Promise<any>;
    signout(session: any): {
        message: string;
    };
    sendEmail(mydata: any): Promise<SentMessageInfo>;
    getAdmin(): Promise<import("../../Entities/adminentity.entity").AdminEntity[]>;
    getAdminByID(id: number): any;
    getAdminByName(name: string): any;
    getAdminByIDName(qry: any): any;
    getImages(name: any, res: any): void;
    updateAdmin(name: string, id: number): any;
    deleteAdminbyid(id: number): any;
    getStudent(): Promise<StudentEntity[]>;
    insertStudent(StudentDto: StudentEntity): any;
    getStudentByAdminID(id: number): any;
    getStudentByID(id: number): any;
    deleteStudentbyid(id: number): any;
    getAllTeacher(): Promise<TeacherEntity[]>;
    insertTeacher(TeacherDto: TeacherEntity): any;
    getTeacherByModID(id: number): any;
    getTeachertByID(id: number): any;
    deleteTeacherbyid(id: number): any;
}
