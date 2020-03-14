import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }

  @Post('/signup')
  async signup(@Body() body, @Res() res: Response) {
    const result = await this.userService.create(body);
    if (result) res.sendStatus(201);
    else res.sendStatus(403);
  }
}
