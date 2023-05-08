import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";
import { AdminUpdate } from 'src/DTOs/adminUpdate.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
        private mailerService: MailerService
      ) {}
      
        async sendEmail(mydata){
            return   await this.mailerService.sendMail({
                   to: mydata.email,
                   subject: mydata.subject,
                   text: mydata.text, 
                 });
           
           }
           

        
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

    // async signin(mydto){
    // console.log(mydto.password);
    // const mydata= await this.adminRepo.findOneBy({email: mydto.email});
    // const isMatch= await bcrypt.compare(mydto.password, mydata.password);
    // if(isMatch) {
    // return 1;
    // }
    // else {
    //     return 0;
    // }
    
    // }
    async signin(mydto){
        console.log(mydto.password);
        if (mydto.email != null && mydto.password != null) {
            console.log(mydto.email);
            console.log( mydto.password);

            const mydata = await this.adminRepo.findOneBy({ email: mydto.email });
            console.log( mydata);

            const isMatch = await bcrypt.compare(mydto.password, mydata.password);
            console.log(isMatch);
            if (isMatch) {
                return true;
            }
            else {
                return false;
            }
        } else {
            return false;
        }
       
    }
    

    getAdmin()
    {
        return this.adminRepo.find();
    }
    getAdminByID(id):any {
        return this.adminRepo.findOneBy({ id });
    }
    getAdminByName(name):any{
        return this.adminRepo.findOneBy({name});
    }

    getAdminByIDName(qry):any {
        return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
    }
    // updateAdmin(name,id):any {
    //     return this.adminRepo.update(id,{name:name});
    //     }
    updateUserbyid(mydto:AdminUpdate,id):any {
        return this.adminRepo.update(id,mydto);
           }
        deleteUserbyid(id):any {
    
            return this.adminRepo.delete(id);
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
