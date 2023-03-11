import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Query, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { StudentService } from 'src/services/student/student.service';
import { TeacherService } from 'src/services/teacher/teacher.service';


@Controller('admin')
export class AdminController {


    constructor(
      private adminService: AdminService,
      private studentService: StudentService,
      private teacherService: TeacherService
      ){}

  //   @Post('/signup')
  //   @UseInterceptors(FileInterceptor('myfile',
  //   {storage:diskStorage({destination: './uploads',
  //   filename: function (req, file, cb) {
  //   cb(null,Date.now()+file.originalname)
  //   }
  //   })
  //   }))
  //  signup(@Body() mydto:AdminDto,@UploadedFile(  new ParseFilePipe({
  //   validators: [
  //     new MaxFileSizeValidator({ maxSize: 16000 }),
  //     new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  //   ],
  // }),) file: Express.Multer.File){
  
  // mydto.filename = file.filename;  
  
  // return this.adminService.signup(mydto);
  // // console.log(file)
  
  // }
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


    @Get('/all')
    getAdmin(){
        return this.adminService.getAdmin();
    }
    @Post('/signup')
   
    signup(@Body() mydto: AdminDto): any {
        return this.adminService.signup(mydto);
      }

    @Get('/findadmin/:id')
      getAdminByID(@Param('id', ParseIntPipe) id: number): any {
        return this.adminService.getAdminByID(id);
      }
    @Get('/findadmin')
    getAdminByIDName(@Query() qry: any): any {
        return this.adminService.getAdminByIDName(qry);
     }
    @Put('/updateadmin/:id')
    @UsePipes(new ValidationPipe())
    updateAdmin(@Body('name') name: string, @Param('id') id: number): any {
        return this.adminService.updateAdmin(name, id);
    }
    @Delete('/deleteadmin/:id')
    deleteAdminbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.adminService.deleteAdminbyid(id);
    }
    /**********************************STUDENT*********************************************************/

    @Get('/allstudent')
    getStudent(){
        return this.studentService.getStudent();
    }
    @Post('/insertstudent')
    @UsePipes(new ValidationPipe())
      insertStudent(@Body() StudentDto: StudentEntity): any {
        return this.studentService.insertStudent(StudentDto);
      }
    @Get('/findstudentbyadmin/:id')
    getStudentByAdminID(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.getStudentByAdminID(id);
    }
    @Get('/findstudent/:id')
    getStudentByID(@Param('id', ParseIntPipe) id: number): any {
        return this.studentService.getStudentByID(id);
      }
    @Delete('/deletestudent/:id')
    deleteStudentbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.studentService.deleteStudentbyid(id);
    }
    /**********************************TEACHER*********************************************************/
   
}
