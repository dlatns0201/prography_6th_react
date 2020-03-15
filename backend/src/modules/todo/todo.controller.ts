import { Controller, Get, Req, UseGuards } from '@nestjs/common';
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
    console.log(req.user);
    console.log(id);
    return this.todoService.getTodosByUserId(id);
  }
}
