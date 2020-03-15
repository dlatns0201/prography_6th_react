import {
  Controller,
  Get,
  Req,
  UseGuards,
  Post,
  Body,
  Delete,
  Param,
  HttpCode,
  Patch,
} from '@nestjs/common';
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

  @UseGuards(AuthenticatedGuard)
  @Delete('/:id')
  @HttpCode(204)
  async deleteTodo(@Param('id') id: string) {
    await this.todoService.deleteTodo(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch('/:id/done/:done')
  async toggleTodo(@Param('id') id: string, @Param('done') done: string) {
    const booleanDone = done === 'true' ? true : false;
    const result = await this.todoService.updateTodo({ id, done: booleanDone });
    return result;
  }

  @UseGuards(AuthenticatedGuard)
  @Patch('/:id/description/:description')
  async changeDescription(
    @Param('id') id: string,
    @Param('description') description: string,
  ) {
    const result = await this.todoService.updateTodo({ id, description });
    return result;
  }
}
