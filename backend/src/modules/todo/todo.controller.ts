import { Controller, Get, Req, UseGuards, Post, Body } from '@nestjs/common';
import { AuthenticatedGuard } from '../../common/authenticated.guard';
import { Request } from 'express';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('/')
  getTodos(@Req() req: Request) {
    const { id } = req.user as any;
    return this.todoService.getTodosByUserId(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/')
  createTodo(@Req() req) {
    const userId = req.user.id;
    const description = req.body.description;
    const result = this.todoService.createTodo(userId, description);
    return result;
  }
}
