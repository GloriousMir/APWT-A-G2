import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from 'src/controller/admin/admin.controller';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { ModEntity } from 'src/Entities/modentity.entity';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { TeacherEntity } from 'src/Entities/teacherentity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { ModService } from 'src/services/mod/mod.service';
import { StudentService } from 'src/services/student/student.service';
import { TeacherService } from 'src/services/teacher/teacher.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,StudentEntity,TeacherEntity,ModEntity])],
    controllers: [AdminController],
    providers: [AdminService,StudentService,TeacherService,ModService]
})
export class AdminModule {}
