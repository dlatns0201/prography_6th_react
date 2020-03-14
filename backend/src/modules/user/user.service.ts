import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { User } from '../../entity/user';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async signup(userInfo: {
    email: string;
    password: string;
    nickname: string;
  }) {
    const result = await this.userRepository.save(userInfo);
    return result;
  }
}
