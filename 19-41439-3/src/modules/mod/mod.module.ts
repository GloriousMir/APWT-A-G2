import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModEntity } from 'src/Entities/modentity.entity';

@Module({
imports: [TypeOrmModule.forFeature([ModEntity])],
controllers: [],
providers: [],
})
export class ModModule {}
