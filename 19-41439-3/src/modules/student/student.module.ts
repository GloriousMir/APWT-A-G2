import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/Entities/studententity.entity';

@Module({
imports: [TypeOrmModule.forFeature([StudentEntity])],
controllers: [],
providers: [],
})
export class StudentModule {}
