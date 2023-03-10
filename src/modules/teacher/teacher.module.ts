import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeacherEntity } from "src/Entities/teacherentity.entity";

@Module({
imports: [TypeOrmModule.forFeature([TeacherEntity])],
controllers: [],
providers: [],
})
export class TeacherModule {}