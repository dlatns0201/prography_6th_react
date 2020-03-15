import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Todo } from '../../entity/todo';
import { User } from '../../entity/user';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private todoRepository: Repository<Todo>,
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async getTodosByUserId(id: string) {
    const result = await this.todoRepository.find({
      relations: ['User'],
      where: {
        User: { id },
      },
      select: ['id', 'description', 'done'],
    });
    return result;
  }

  async createTodo(userId: string, description: string) {
    const user = await this.userRepository.findOne({ id: userId });
    const todo = await this.todoRepository.create({
      description,
      User: user,
    });
    const { id, done } = await this.todoRepository.save(todo);
    return { id, description, done };
  }
}
