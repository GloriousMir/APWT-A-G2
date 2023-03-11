import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<AdminEntity>);
    insertUser(mydto: AdminDto): Promise<AdminEntity>;
    getAdmin(): Promise<AdminEntity[]>;
    getAdminByID(id: any): any;
    getAdminByIDName(qry: any): any;
    updateAdmin(name: any, id: any): any;
    deleteAdminbyid(id: any): any;
    getStudentByAdminID(id: any): any;
}
