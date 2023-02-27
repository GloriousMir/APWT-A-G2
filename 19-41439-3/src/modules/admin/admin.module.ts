import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from 'src/controller/admin/admin.controller';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { StudentEntity } from 'src/Entities/studententity.entity';
import { AdminService } from 'src/services/admin/admin.service';
import { StudentService } from 'src/services/student/student.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,StudentEntity])],
    controllers: [AdminController],
    providers: [AdminService,StudentService]
})
export class AdminModule {}
