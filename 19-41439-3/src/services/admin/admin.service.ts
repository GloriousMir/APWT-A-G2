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
    getStudentByID(id):any {
        return this.adminRepo.findOneBy({ id });
    }

    getStudentByIDName(qry):any {
        return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
    }
    updateStudentUser(name,id):any {
        console.log(name+id);
        return this.adminRepo.update(id,{name:name});
        }

}
