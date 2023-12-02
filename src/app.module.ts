import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./users/users.module";
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
      UsersModule,
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'test.db',
        autoLoadEntities: true,
        synchronize: true,
      }),
      TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
