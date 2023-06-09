import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import validationConfig from './config/validationPipe.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000;

  // SWAGGER CONFIG
  const config = new DocumentBuilder()
    .setTitle('Mega Tv Service')
    .setDescription(
      'MEGA Services is a new platform to contract television services in a building. The main objective is to help users contract a cable TV service for their home.',
    )
    .setVersion('1.0')
    .addTag('Buildings')
    .addTag('TvPlans')
    .addTag('Customers')
    .addTag('Subscriptions')
    .build();

  app.useGlobalPipes(new ValidationPipe(validationConfig));

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
