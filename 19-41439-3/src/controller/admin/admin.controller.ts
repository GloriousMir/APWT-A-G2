import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Query, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { TeacherDto } from 'src/DTOs/teacherDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { TeacherEntity } from 'src/Entities/teacherentity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { ModService } from 'src/services/mod/mod.service';
import { StudentService } from 'src/services/student/student.service';
import { TeacherService } from 'src/services/teacher/teacher.service';
import { SessionGuard } from 'src/session.guard';


@Controller('admin')
export class AdminController {


    constructor(
      private adminService: AdminService,
      private studentService: StudentService,
      private teacherService: TeacherService,
      private modService: ModService

      ){}

// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//   @Post('/signup')
//   @UseInterceptors(FileInterceptor('myfile',
//   {storage:diskStorage({
//     destination:'./uploads',
//     filename: function(req, file, cb){
//       cb(null,Date.now()+file.originalname)
//     }
//   })
// }))
// signup(@Body() AdminDto:AdminDto,@UploadedFile(new ParseFilePipe({
//    validators: [
//      new MaxFileSizeValidator({ maxSize: 16000 }),
//      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
//    ],
// }),) file: Express.Multer.File){
//   AdminDto.filename = file.filename;  
//   console.log(file);
// return this.adminService.signup(AdminDto);

// }
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
/*----------------------------------------[SIGNUP,SIGNIN,SIGNOUT]----------------------------------------*/

    @Post('/signup')
    @UseInterceptors(FileInterceptor('Profile',
    {storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
      }
    })
    
    }))
    signup(@Body() mydto: AdminDto,@UploadedFile(  new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 160000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File){
    
    mydto.filename = file.filename; 
        return this.adminService.signup(mydto);
      }

    @Get('/signin')
    signin(@Session() session, @Body() mydto:AdminDto)
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
    @Get('/signout')
    signout(@Session() session)
    {
      if(session.destroy())
    {
      return {message:"you are logged out"};
    }
      else
    {
      throw new UnauthorizedException("Invalid Actions.....are you logged in?");
    }
  }
  
/*----------------------------------------[END]----------------------------------------*/


    @Get('/all')
    @UseGuards(SessionGuard)
    getAdmin(){
        return this.adminService.getAdmin();
    }
    @Get('/findadmin/:id')
    @UseGuards(SessionGuard)
      getAdminByID(@Param('id', ParseIntPipe) id: number): any {
        return this.adminService.getAdminByID(id);
      }
    @Get('/findadmin')
    @UseGuards(SessionGuard)
    getAdminByIDName(@Query() qry: any): any {
        return this.adminService.getAdminByIDName(qry);
     }
    @Put('/updateadmin/:id')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateAdmin(@Body('name') name: string, @Param('id') id: number): any {
        return this.adminService.updateAdmin(name, id);
    }
    @Delete('/deleteadmin/:id')
    @UseGuards(SessionGuard)
    deleteAdminbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.adminService.deleteAdminbyid(id);
    }
    /**********************************STUDENT*********************************************************/

    @Get('/allstudent')
    @UseGuards(SessionGuard)
    getStudent(){
        return this.studentService.getStudent();
    }
    @Post('/insertstudent')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
      insertStudent(@Body() StudentDto: StudentEntity): any {
        return this.studentService.insertStudent(StudentDto);
      }
    @Get('/findstudentbyadmin/:id')
    @UseGuards(SessionGuard)
    getStudentByAdminID(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.getStudentByAdminID(id);
    }
    @Get('/findstudent/:id')
    @UseGuards(SessionGuard)
    getStudentByID(@Param('id', ParseIntPipe) id: number): any {
        return this.studentService.getStudentByID(id);
      }
    @Delete('/deletestudent/:id')
    @UseGuards(SessionGuard)
    deleteStudentbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.studentService.deleteStudentbyid(id);
    }
    /**********************************TEACHER*********************************************************/
    @Get('/allteacher')
    @UseGuards(SessionGuard)
    getAllTeacher(){
        return this.teacherService.getAllTeacher();
    }
    @Post('/insertteacher')
    @UseGuards(SessionGuard)
    //@UsePipes(new ValidationPipe())
      insertTeacher(@Body() TeacherDto: TeacherEntity): any {
        return this.teacherService.insertTeacher(TeacherDto);
      }
    @Get('/findteacherbymod/:id')
    @UseGuards(SessionGuard)
    getTeacherByModID(@Param('id', ParseIntPipe) id: number): any {
    return this.modService.getTeacherByModID(id);
    }
    @Get('/findteacher/:id')
    @UseGuards(SessionGuard)
    getTeachertByID(@Param('id', ParseIntPipe) id: number): any {
        return this.teacherService.getTeachertByID(id);
      }
    @Delete('/deleteteacher/:id')
    @UseGuards(SessionGuard)
    deleteTeacherbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.teacherService.deleteTeacherbyid(id);
   
}
}
