import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<AdminEntity>);
    signup(mydto: AdminDto): Promise<AdminEntity>;
    signin(mydto: any): Promise<1 | 0>;
    getAdmin(): Promise<AdminEntity[]>;
    getAdminByID(id: any): any;
    getAdminByIDName(qry: any): any;
    updateAdmin(name: any, id: any): any;
    deleteAdminbyid(id: any): any;
    getStudentByAdminID(id: any): any;
    getTeacherByAdminID(id: any): any;
}
