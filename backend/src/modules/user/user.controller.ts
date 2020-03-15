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
import { AuthenticatedGuard } from 'src/common/authenticated.guard';

interface Request {
  user?: any;
  logout: any;
  session?: any;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUserInfo(@Req() req: Request, @Res() res: Response) {
    if (req.user) res.json(req.user);
    else res.sendStatus(401);
  }

  @Post('/signup')
  async signup(@Body() body, @Res() res: Response) {
    const result = await this.userService.create(body);
    if (result) res.sendStatus(201);
    else res.sendStatus(403);
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  async login(@Req() req: Request): Promise<any> {
    const { id, email, nickname } = await this.userService.findById(req.user);
    return {
      id,
      email,
      nickname,
    };
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout();
    req.session.destroy();
    res.clearCookie('pgsid');
    res.sendStatus(200);
  }
}
