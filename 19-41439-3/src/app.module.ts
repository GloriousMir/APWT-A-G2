import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentService } from './services/student/student.service';

@Module({
  
  imports: [AdminModule,StudentModule,TeacherModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1290',
      database: 'Pro',
      autoLoadEntities: true,
      synchronize: true,

    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
