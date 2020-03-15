import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoProviders } from './todo.providers';
import { UserProviders } from '../user/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [...TodoProviders, ...UserProviders, TodoService],
  exports: [TodoService],
})
export class TodoModule {}
