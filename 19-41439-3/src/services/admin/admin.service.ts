import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
      ) {}

        // async signup(AdminDto) {
        // const salt = await bcrypt.genSalt();
        // const hassedpassed = await bcrypt.hash(AdminDto.password, salt);
        // AdminDto.password= hassedpassed;
        // return this.adminRepo.save(AdminDto);
        // }
    

        
   async signup(mydto:AdminDto)
    {
        const adminaccount = new AdminEntity()
        adminaccount.name = mydto.name;
        adminaccount.email = mydto.email;
        adminaccount.address = mydto.address;
        adminaccount.filename = mydto.filename;
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        adminaccount.password= hassedpassed;
       return this.adminRepo.save(adminaccount);
    }

    async signin(mydto){
    console.log(mydto.password);
    const mydata= await this.adminRepo.findOneBy({email: mydto.email});
    const isMatch= await bcrypt.compare(mydto.password, mydata.password);
    if(isMatch) {
    return 1;
    }
    else {
        return 0;
    }
    
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
    getTeacherByAdminID(id):any {
        return this.adminRepo.find({ 
                where: {id:id},
                 relations: {
                    students: true,
                 },
         });
    }

}
