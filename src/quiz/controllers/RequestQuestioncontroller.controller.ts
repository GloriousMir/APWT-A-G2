import {
    Controller,Body,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { RequestQuestion } from "../entitys/requestQuestion.entity";
  import { RequestQuestionService } from "../services/RequestQuestionservice.service";
  
  @Controller('/requestquestion')
  export class RequestQuestionController {
      constructor(private readonly requestQuestionService: RequestQuestionService) { }
  
      @Get('/getrequestquestion')
      getRequestQuestion(): any {
          return this.requestQuestionService.getRequestQuestion();
      }
  
      @Post('/insertrequestquestion')
      @UsePipes(new ValidationPipe())
      insertRequestQuestion(@Body() requestQuestionDto: RequestQuestion): any {
          return this.requestQuestionService.insertRequestQuestion(requestQuestionDto);
      }
  
      @Put('/updaterequestQuestion/:id')
      @UsePipes(new ValidationPipe())
      updateRequestQuestion(@Body() requestQuestionDto, @Param('id', ParseIntPipe) id): any {
          return this.requestQuestionService.updateRequestQuestion(requestQuestionDto, id);
      }
  
      @Delete('deleterequestquestion/:id')
      @UsePipes(new ValidationPipe())
      deleteRequestQuestion(@Param('id', ParseIntPipe) id): any {
          return this.requestQuestionService.deleteRequestQuestion(id);
      }
   }