import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
      ) {}

    insertUser(mydto:AdminDto):any 
    {
        const adminaccount = new AdminEntity()
        adminaccount.name = mydto.name;
        adminaccount.email = mydto.email;
        adminaccount.password = mydto.password;
        adminaccount.address = mydto.address;
       return this.adminRepo.save(adminaccount);
    }

    getAdmin()
    {
        return this.adminRepo.find();
    }
    getAdminByID(id):any {
        return this.adminRepo.findOneBy({ id });
    }

    getAdminByIDName(qry):any {
        return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
    }
    updateAdmin(name,id):any {
        console.log(name+id);
        return this.adminRepo.update(id,{name:name});
        }
    deleteAdminbyid(id):any {
    
        return this.adminRepo.remove(id);
    }

    getStudentByAdminID(id):any {
        return this.adminRepo.find({ 
                where: {id:id},
            relations: {
                students: true,
            },
         });
    }

}
