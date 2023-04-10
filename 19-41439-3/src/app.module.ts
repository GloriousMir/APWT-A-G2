import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeratorModule } from './Modatetor/moderator.module';
import { AdminModule } from './modules/admin/admin.module';
import { ModModule } from './modules/mod/mod.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';

@Module({
  
  imports: [AdminModule,StudentModule,TeacherModule,ModModule,ModeratorModule, TypeOrmModule.forRoot(
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
