import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  serializeUser(id: string, done: (err: Error, user: any) => void): any {
    done(null, id);
  }
  async deserializeUser(
    id: string,
    done: (err: Error, payload: any) => void,
  ): Promise<any> {
    const user = await this.userService.findById(id);
    const { password, ...payload } = user;
    console.log(payload);
    done(null, payload);
  }
}
