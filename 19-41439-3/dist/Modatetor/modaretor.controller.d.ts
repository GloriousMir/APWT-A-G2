/// <reference types="multer" />
import { ModaretorDto } from "./modaretor.dto";
import { ModeratorService } from "./moderator.service";
export declare class ModaretorController {
    private modaretorService;
    constructor(modaretorService: ModeratorService);
    signup(mydto: ModaretorDto, file: Express.Multer.File): Promise<import("./moderator.entity").ModaretorEntity>;
    signin(session: any, mydto: ModaretorDto): {
        message: string;
    };
}
