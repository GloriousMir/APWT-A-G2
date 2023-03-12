import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FileUplode } from "../entitys/fileUplode.entity";


@Injectable()
export class FileUplodeservice {
  constructor(
    @InjectRepository(FileUplode)
    private fileUplodeRepo: Repository<FileUplode>,
    ) { }
    
    getFileUplode(): any {
        return this.fileUplodeRepo.find();
    }

    insertFileUplode(fileUplodeDto: FileUplode): any {
        const fileUplode = new FileUplode();
        fileUplode.files = fileUplodeDto.files;
        return this.fileUplodeRepo.save(fileUplode);
    }

    updateFileUplode(fileUplodeDto, id): any {
        return this.fileUplodeRepo.update(id, fileUplodeDto);
    }

    deleteFileUplode(id): any {
        return this.fileUplodeRepo.delete(id);
    }
}