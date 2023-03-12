import {Controller, Get, Body, Post, Param, UsePipes, ValidationPipe, ParseIntPipe, Put, Delete, UploadedFile, UseInterceptors, FileTypeValidator, ParseFilePipe, MaxFileSizeValidator, Session, UseGuards, } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExpertInfoDTO } from '../dto/expertInfo.dto';
import { NoticeDto } from '../dto/noticeDto.dto';
import { FileUplode } from '../entitys/fileUplode.entity';
import { diskStorage } from 'multer';
import { ExpertService } from '../services/expertservice.service';
import { NoticeService } from '../services/noticeservice.service';
import { FileUplodeservice } from '../services/fileUplodservice.service';
import { FileUplodedto } from '../dto/fileUploddto.dtos';
import { AdminForm } from '../dto/AdminForm.dto';

@Controller('/expert')
export class ExpertController {
  constructor(
    private readonly expertService: ExpertService,
    private noticeService: NoticeService,
    private fileUplodeservice: FileUplodeservice,
  ) {}

  @Get('/index')
  getExpert(): any {
    return this.expertService.getIndex();
  }

  @Post('/insert')
  @UsePipes(new ValidationPipe())
  insertExpert(@Body() expertdto: ExpertInfoDTO): any {
    return this.expertService.insertExpert(expertdto);
  }

  @Get('/getall')
  getAllExpert(): any {
    return this.expertService.getAllExpert();
  }

  @Get('/get/:id')
  getExpertById(@Param('id', ParseIntPipe) id: number): any {
    return this.expertService.getExpertById(id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  updateExpert(@Body() expertdto, @Param('id', ParseIntPipe) id): any {
    return this.expertService.updateExpert(expertdto, id);
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  deleteExpert(@Param('id', ParseIntPipe) id): any {
    return this.expertService.deleteExpert(id);
  }

  @Post('/insertnotice')
  @UsePipes(new ValidationPipe())
  insertnotice(@Body() noticedto: NoticeDto): any {
    return this.noticeService.insertNotice(noticedto);
  }

  @Post('/fileupload')
  @UseInterceptors(
    FileInterceptor('myfile', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  insertFileUplode(
    @Body() mydto: FileUplodedto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 160000 }),
          new FileTypeValidator({ fileType: 'pdf' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    mydto.files = file.filename;
    return this.fileUplodeservice.insertFileUplode(mydto);
  }

  @Post('/signup')
  @UseInterceptors(FileInterceptor('myfile',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  
  }))
  signup(@Body() mydto:AdminForm,@UploadedFile(  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 16000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File){
  
  mydto.filename = file.filename;  
  
  return this.expertService.signup(mydto);
  console.log(file)
  }
  @Get('/signin')
  signin(@Session() session, @Body() mydto:AdminForm)
  {
  if(this.expertService.signin(mydto))
  {
    session.email = mydto.email;
  
    console.log(session.email);
    return {message:"success"};
  
  }
  else
  {
    return {message:"invalid credentials"};
  }
   
  }
  @Get('/signout')
  signout(@Session() session)
  {
    if(session.destroy())
    {
      return {message:"you are logged out"};
    }
    else
    {
      throw new UnauthorizedException("invalid actions");
    }
  }
  @Post('/sendemail')
  sendEmail(@Body() mydata){
  return this.expertService.sendEmail(mydata);
  }

}