import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as passport from 'passport';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    cors({
      origin: 'http://localhost:3000',
    }),
  );

  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(8000);
}
bootstrap();
