import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { StudentDto } from 'src/DTOs/studentDTO.dto';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { StudentService } from 'src/services/student/student.service';

@Controller('admin')
export class AdminController {


    constructor(
      private adminService: AdminService,
      private studentService: StudentService
      ){}


    @Get('/all')
    getAdmin(){
        return this.adminService.getAdmin();
    }
    @Post('/insertadmin')
   
      insertAdmin(@Body() mydto: AdminDto): any {
        return this.adminService.insertUser(mydto);
      }

    @Get('/findadmin/:id')
      getAdminByID(@Param('id', ParseIntPipe) id: number): any {
        return this.adminService.getAdminByID(id);
      }
    @Get('/findadmin')
    getAdminByIDName(@Query() qry: any): any {
        return this.adminService.getAdminByIDName(qry);
     }
    @Put('/updateadmin/')
    @UsePipes(new ValidationPipe())
    updateAdmin(@Body('name') name: string, @Body('id') id: number): any {
        return this.adminService.updateAdmin(name, id);
    }
    @Delete('/deleteadmin/:id')
    deleteAdminbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.adminService.deleteAdminbyid(id);
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
    @Delete('/deletestudent/:id')
    deleteStudentbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.studentService.deleteStudentbyid(id);
    }
    @Get('/allstudent')
    getStudent(){
        return this.studentService.getStudent();
    }
}
