import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ModaretorDto } from "./modaretor.dto";
import { ModaretorEntity } from "./moderator.entity";
import * as bcrypt from 'bcrypt';


@Injectable()
export class ModeratorService {
    adminRepo: any;
    constructor(
        @InjectRepository(ModaretorEntity)
        private ModeratorRepo: Repository<ModaretorEntity>,
      ) {}

      async signup(mydto:ModaretorDto)
      {
          const modaccount = new ModaretorEntity()
          modaccount.name = mydto.name;
          modaccount.email = mydto.email;
          modaccount.address = mydto.address;
          modaccount.filename = mydto.filename;
          const salt = await bcrypt.genSalt();
          const hassedpassed = await bcrypt.hash(mydto.password, salt);
          modaccount.password= hassedpassed;
         return this.ModeratorRepo.save(modaccount);
      }

      async signin(mydto){
        console.log(mydto.password);
        const mydata= await this.ModeratorRepo.findOneBy({email: mydto.email});
        const isMatch= await bcrypt.compare(mydto.password, mydata.password);
        if(isMatch) {
        return 1;
        }
        else {
            return 0;
        }
        
        }
    }