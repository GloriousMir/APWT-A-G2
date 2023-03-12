import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { ExpertInfoDTO } from '../dto/expertInfo.dto';
import { ExpertInfo } from '../entitys/expertInfo.entity';
import { ExpertNotice } from '../entitys/expertNotice.entity';
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
export class ExpertService {
  constructor(
    @InjectRepository(ExpertInfo)
    private expertRepo: Repository<ExpertInfo>,
    private mailerService: MailerService
  ) {}

  getIndex(): string {
    return 'Lol';
  }

  insertExpert(expertdto: ExpertInfoDTO): any {
    const expert = new ExpertInfo();
    expert.Fname = expertdto.Fname;
    expert.Fidd = expertdto.Fidd;
    expert.Fdep = expertdto.Fdep;
    expert.Fprogram = expertdto.Fprogram;
    expert.Faddress = expertdto.Faddress;
    expert.Fnum = expertdto.Fnum;
    expert.dob = expertdto.dob;
    expert.Fsal = expertdto.Fsal;
    expert.email = expertdto.email;
    expert.password = expertdto.password;


    for(let i=0; i<expertdto?.expertNotices.length; i++){
      const expertNotice = new ExpertNotice();
      expert.expertNotices.push(expertNotice);
    }

    return this.expertRepo.save(expert);
  }

  getAllExpert(): any {
    return this.expertRepo.find(
      { relations: { expertNotices: true } }
    );
  }

  getNoticesByExpertID(id): any { 
    return this.expertRepo.find({
      where: { Fid: id },
      relations: { expertNotices : true },   
    });
  }

  getExpertById(id): any {
    return this.expertRepo.findOneBy(id);
  }

  updateExpert(expertdto, id): any {
    return this.expertRepo.update(id, expertdto);
  }

  deleteExpert(id): any {
    return this.expertRepo.delete(id);
  }

  async signup(mydto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(mydto.password, salt);
    mydto.password= hassedpassed;
    return this.expertRepo.save(mydto);
    }
    
    async signin(mydto){
        console.log(mydto.password);
    const mydata= await this.expertRepo.findOneBy({email: mydto.email});
    const isMatch= await bcrypt.compare(mydto.password, mydata.password);
    if(isMatch) {
    return 1;
    }
    else {
        return 0;
    }
    
    }
    
    async sendEmail(mydata){
     return   await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text, 
          });
    
    }
}