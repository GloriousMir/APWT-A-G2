import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [AdminModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1290',
      database: 'Test_Data',
      autoLoadEntities: true,
      synchronize: true,
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
