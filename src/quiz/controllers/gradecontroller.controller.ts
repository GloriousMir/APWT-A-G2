import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { gradeDTO } from '../dto/gradeDto.dto';
import { GradeService } from '../services/gradeservice.service';

@Controller('/grade')
export class GradeController {
  constructor(private readonly GradeService: GradeService) {}

  @Get('/getgrade')
  getGrade(): any {
    return this.GradeService.getGrade();
  }

  @Post('/insertgrade')
  insertGrade(@Body() gradedto: gradeDTO): any {
    return this.GradeService.insertGrade(gradedto);
  }

  @Put('/updategrade/:id')
  updateGrade(
    @Body() gradedto,
    @Param('id', ParseIntPipe) id,
  ): any {
    return this.GradeService.updateGrade(gradedto, id);
  }

  @Delete('deletegrade/:id')
  deleteGrade(@Param('id', ParseIntPipe) id): any {
    return this.GradeService.deleteGrade(id);
  }
}