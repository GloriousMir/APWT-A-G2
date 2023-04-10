import { Repository } from "typeorm";
import { ModaretorDto } from "./modaretor.dto";
import { ModaretorEntity } from "./moderator.entity";
export declare class ModeratorService {
    private ModeratorRepo;
    adminRepo: any;
    constructor(ModeratorRepo: Repository<ModaretorEntity>);
    signup(mydto: ModaretorDto): Promise<ModaretorEntity>;
    signin(mydto: any): Promise<1 | 0>;
}
