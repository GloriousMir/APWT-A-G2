import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModEntity } from "src/Entities/modentity.entity";
import { Repository } from "typeorm";

@Injectable()
export class ModService {
    constructor(
        @InjectRepository(ModEntity)
        private modRepo: Repository<ModEntity>,
      ) {}

      getTeacherByModID(id):any {
        return this.modRepo.find({ 
                where: {id:id},
                 relations: {
                    teachers: true,
                 },
         });
    }
    }