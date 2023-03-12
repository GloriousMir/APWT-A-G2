import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { gradeDTO } from "../dto/gradeDto.dto";
import { gradeInfo } from "../entitys/gradeInfo.entity";

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(gradeInfo)
    private GradeRepo: Repository<gradeInfo>,
  ) { }
  
  getGrade(): any {
    return this.GradeRepo.find();
  }

  insertGrade(gradedto: gradeDTO): any {
    const grade = new gradeInfo();
    grade.studentId = gradedto.studentId;
    grade.curseId = gradedto.curseId;
    grade.subject = gradedto.subject;
    grade.grade = gradedto.grade;
    return this.GradeRepo.save(grade);
  }

  updateGrade(gradedto, id): any {
    return this.GradeRepo.update(id, gradedto);
  }

  updateGradeById(gradedto, id): any {
    return this.GradeRepo.update(id, gradedto);
  }

  deleteGrade(id): any {
    return this.GradeRepo.delete(id);
  }

}