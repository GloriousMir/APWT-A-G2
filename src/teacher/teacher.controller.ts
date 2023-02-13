import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  @Post()
  create(@Body() body) {
    return `This is a POST request with body: ${JSON.stringify(body)}`;
  }

  @Get()
  findAll(@Query() query) {
    return `This is a GET request with query: ${JSON.stringify(query)}`;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This is a GET request with id: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    return `This is a PUT request with id: ${id} and body: ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This is a DELETE request with id: ${id}`;
  }
}
