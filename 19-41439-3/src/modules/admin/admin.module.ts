import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from 'src/controller/admin/admin.controller';
import { AdminEntity } from 'src/Entities/adminentity.entity';
import { AdminService } from 'src/services/admin/admin.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule {}
