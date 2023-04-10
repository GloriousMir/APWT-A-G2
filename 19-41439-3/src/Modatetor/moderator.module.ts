import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModaretorController } from "./modaretor.controller";
import { ModaretorEntity } from "./moderator.entity";
import { ModeratorService } from "./moderator.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ModaretorEntity])],
    controllers: [ModaretorController],
    providers: [ModeratorService]
})
export class ModeratorModule {}