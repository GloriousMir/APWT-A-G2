import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/taskcontroller.controller';
import { ExpertController } from './controllers/expertController.controller';
import { NoticeController } from './controllers/noticecontroller.controller';
import { GradeController } from './controllers/gradecontroller.controller';
import { TaskInfo } from './entitys/taskInfo.entity';
import { ExpertInfo } from './entitys/expertInfo.entity';
import { ExpertNotice } from './entitys/expertNotice.entity';
import { FileUplode } from './entitys/fileUplode.entity';
import { gradeInfo } from './entitys/gradeInfo.entity';
import { TaskService } from './services/taskservice.service';
import { ExpertService } from './services/expertservice.service';
import { FileUplodeservice } from './services/fileUplodservice.service';
import { NoticeService } from './services/noticeservice.service';
import { GradeService } from './services/gradeservice.service';
import { MailerModule } from "@nestjs-modules/mailer";


@Module({
  imports: [
    TypeOrmModule.forFeature([
      ExpertInfo,
      ExpertNotice,
      TaskInfo,
      gradeInfo,
      FileUplode,
    ]),

    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
                 port: 465,
                 ignoreTLS: true,
                 secure: true,
                 auth: {
                     user: 'your email address',
                     pass: 'your app password'
                 },
                }
    }),

    
  ],
  controllers: [
    ExpertController,
    NoticeController,
    TaskController,
    GradeController,
  ],
  providers: [
    ExpertService,
    NoticeService,
    TaskService,
    GradeService,
    FileUplodeservice,
  ],
})
export class ExpertModule {}