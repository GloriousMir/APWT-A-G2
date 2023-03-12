import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe,} from '@nestjs/common';
  import { NoticeDto } from '../dto/noticeDto.dto';
  import { NoticeService } from '../services/noticeservice.service';
  
  @Controller('/notice')
  export class NoticeController {
    constructor(private readonly NoticeService: NoticeService) {}
  
    @Get('/getnotice')
    getNotice(): any {
      return this.NoticeService.getNotice();
    }
  
    
  
    @Put('/updatenotice')
    @UsePipes(new ValidationPipe())
    updateNotice(@Body() noticedto: NoticeDto): any {
      return this.NoticeService.updateNotice(noticedto, noticedto.id);
    }
  
    @Put('/updatenoticeBy/:id')
    @UsePipes(new ValidationPipe())
    updateNoticeById(
      @Body() noticedto: NoticeDto,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.NoticeService.updateNotice(noticedto, id);
    }
  
    @Delete('/deletenotice/:id')
    @UsePipes(new ValidationPipe())
    deleteNotice(@Param('id', ParseIntPipe) id: number): any {
      return this.NoticeService.deleteNotice(id);
    }
  }