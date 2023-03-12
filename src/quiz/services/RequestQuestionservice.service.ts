import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RequestQuestion } from "../entitys/requestQuestion.entity";



@Injectable()
export class RequestQuestionService {
    constructor(
        @InjectRepository(RequestQuestion)
        private requestQuestionRepo: Repository<RequestQuestion>,
    ) { }

    getRequestQuestion(): any {
        return this.requestQuestionRepo.find();
    }

    insertRequestQuestion(requestQuestionDto: RequestQuestion): any {
        const requestQuestion = new RequestQuestion();
        requestQuestion.Fid = requestQuestionDto.Fid;
        requestQuestion.question = requestQuestionDto.question;
        requestQuestion.reason = requestQuestionDto.reason;
        requestQuestion.date = requestQuestionDto.date;
        requestQuestion.time = requestQuestionDto.time;
        return this.requestQuestionRepo.save(requestQuestion);
    }

    updateRequestQuestion(requestQuestionDto, id): any {
        return this.requestQuestionRepo.update(id, requestQuestionDto);
    }

    updateRequestQuestionById(requestQuestionDto, id): any {
        return this.requestQuestionRepo.update(id, requestQuestionDto);
    }

    deleteRequestQuestion(id): any {
        return this.requestQuestionRepo.delete(id);
    }
    
}