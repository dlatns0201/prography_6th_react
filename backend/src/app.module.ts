import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [UserModule, AuthModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
