import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AdminDto } from 'src/DTOs/adminDTO.dto';
import { AdminService } from 'src/services/admin/admin.service';

@Controller('admin')
export class AdminController {


    constructor(private adminService: AdminService){}


    @Get('/all')
    getAdmin(){
        return this.adminService.getAdmin();
    }
    @Post('/insertadmin')
   
      insertAdmin(@Body() mydto: AdminDto): any {
        return this.adminService.insertUser(mydto);
      }

    @Get('/findadmin/:id')
      getStudentByID(@Param('id', ParseIntPipe) id: number): any {
        return this.adminService.getStudentByID(id);
      }
    @Get('/findadmin')
    getStudentByIDName(@Query() qry: any): any {
        return this.adminService.getStudentByIDName(qry);
     }
    @Put('/updateadmin/')
    // @UsePipes(new ValidationPipe())
    updateStudentUser(@Body('name') name: string, @Body('id') id: number): any {
        return this.adminService.updateStudentUser(name, id);
    }
}
