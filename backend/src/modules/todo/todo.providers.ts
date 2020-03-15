import { Connection } from 'typeorm';
import { Todo } from 'src/entity/todo';

export const TodoProviders = [
  {
    provide: 'TODO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Todo),
    inject: ['DATABASE_CONNECTION'],
  },
];
