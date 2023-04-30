import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';
import { MailerService } from "@nestjs-modules/mailer/dist";
export declare class AdminService {
    private adminRepo;
    private mailerService;
    constructor(adminRepo: Repository<AdminEntity>, mailerService: MailerService);
    sendEmail(mydata: any): Promise<SentMessageInfo>;
    signup(mydto: AdminDto): Promise<AdminEntity>;
    signin(mydto: any): Promise<1 | 0>;
    getAdmin(): Promise<AdminEntity[]>;
    getAdminByID(id: any): any;
    getAdminByName(name: any): any;
    getAdminByIDName(qry: any): any;
    updateAdmin(name: any, id: any): any;
    deleteAdminbyid(id: any): any;
    getStudentByAdminID(id: any): any;
    getTeacherByAdminID(id: any): any;
}
