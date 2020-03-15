import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Todo } from '../../entity/todo';
import { User } from '../../entity/user';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private todoRepository: Repository<Todo>,
  ) {}

  getTodosByUserId(id: string) {
    return this.todoRepository.find({
      relations: ['User'],
      where: {
        User: { id },
      },
    });
  }
}
