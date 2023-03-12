  import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe, } from '@nestjs/common';
  import { TaskDto } from '../dto/taskDto.dto';
  import { TaskService } from '../services/taskservice.service';
  
  @Controller('/task')
  export class TaskController {
    constructor(private readonly taskService: TaskService) {}
  
    @Get('/gettask')
    getTask(): any {
      return this.taskService.getTask();
    }
  
    @Post('/inserttask')
    @UsePipes(new ValidationPipe())
    insertTask(@Body() taskdto: TaskDto): any {
      return this.taskService.insertTask(taskdto);
    }
  
    @Put('/updatetask/:id')
    @UsePipes(new ValidationPipe())
    updateTask(@Body() taskdto, @Param('id', ParseIntPipe) id): any {
      return this.taskService.updateTask(taskdto, id);
    }
  
    @Delete('deletetask/:id')
    @UsePipes(new ValidationPipe())
    deleteTask(@Param('id', ParseIntPipe) id): any {
      return this.taskService.deleteTask(id);
    }
  }