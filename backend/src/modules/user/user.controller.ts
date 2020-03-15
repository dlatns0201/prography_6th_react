import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UseGuards,
  HttpStatus,
  HttpCode,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { LoginGuard } from 'src/common/login.guard';

interface Request {
  user?: any;
}

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

  @UseGuards(LoginGuard)
  @Post('/login')
  @HttpCode(200)
  async login(@Req() req: Request): Promise<any> {
    const { id, email, nickname } = await this.userService.findById(req.user);
    return {
      id,
      email,
      nickname,
    };
  }
}
