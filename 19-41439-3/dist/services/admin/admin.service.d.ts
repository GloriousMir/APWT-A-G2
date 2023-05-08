import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';
import { MailerService } from "@nestjs-modules/mailer/dist";
import { AdminUpdate } from 'src/DTOs/adminUpdate.dto';
export declare class AdminService {
    private adminRepo;
    private mailerService;
    constructor(adminRepo: Repository<AdminEntity>, mailerService: MailerService);
    sendEmail(mydata: any): Promise<SentMessageInfo>;
    signup(mydto: AdminDto): Promise<AdminEntity>;
    signin(mydto: any): Promise<boolean>;
    getAdmin(): Promise<AdminEntity[]>;
    getAdminByID(id: any): any;
    getAdminByName(name: any): any;
    getAdminByIDName(qry: any): any;
    updateUserbyid(mydto: AdminUpdate, id: any): any;
    deleteUserbyid(id: any): any;
    getStudentByAdminID(id: any): any;
    getTeacherByAdminID(id: any): any;
}
