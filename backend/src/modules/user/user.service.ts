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

  async create(userInfo: {
    email: string;
    password: string;
    nickname: string;
  }) {
    try {
      const result = await this.userRepository.save(userInfo);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }
}
