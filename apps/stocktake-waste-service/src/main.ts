/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { http } from '@google-cloud/functions-framework';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const port = process.env.PORT || 3333;
const globalPrefix = 'api';
const server = express();

async function bootstrap(expressInstance: express.Express) {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  app.listen(port);
  return app.init();
}

bootstrap(server)
  .then(() => {
    if (environment.production) {
      Logger.log(
        `🚀 [PROD] Application is running on: http://localhost:${port}/${globalPrefix}`
      );
    } else {
      Logger.log(
        `🚀 [DEV] Application is running on: http://localhost:${port}/${globalPrefix}`
      );
    }
  }).catch((err) => Logger.error('Nest broken', err));

http('apiInv', server);
