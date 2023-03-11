import { ModEntity } from "src/Entities/modentity.entity";
import { Repository } from "typeorm";
export declare class ModService {
    private modRepo;
    constructor(modRepo: Repository<ModEntity>);
    getTeacherByModID(id: any): any;
}
