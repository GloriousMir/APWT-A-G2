import { Module } from '@nestjs/common';
//import { AdminModule } from './admin/MODULE/adminmodule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpertModule } from './quiz/expert.modules';

@Module({
  imports: [
    //AdminModule,
    ExpertModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '42024',
      database: 'expert',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}