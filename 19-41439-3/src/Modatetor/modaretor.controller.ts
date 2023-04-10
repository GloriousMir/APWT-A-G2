import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, Post, Session, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ModaretorDto } from "./modaretor.dto";
import { ModeratorService } from "./moderator.service";

@Controller('modaretor')
export class ModaretorController {
    constructor(
        private modaretorService: ModeratorService
    )
    {}

@Post('/signup')
@UseInterceptors(FileInterceptor('ProfilePic',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto: ModaretorDto,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 160000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename; 
    return this.modaretorService.signup(mydto);
  }

  @Get('/signin')
  signin(@Session() session, @Body() mydto:ModaretorDto)
    {
    
     if(session.email = mydto.email)
    {
      console.log(session.email);
      return {message:"Login success"};
    }
    else
    {
     return {message:"Invalid Credentials........Try again"};
    }
  }
}