import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER CONFIG
  const config = new DocumentBuilder()
    .setTitle('Mega Tv Service')
    .setDescription(
      'MEGA Services is a new platform to contract television services in a building. The main objective is to help users contract a cable TV service for their home.',
    )
    .setVersion('1.0')
    .addTag('Buildings')
    .addTag('TvPlan')
    .addTag('Customers')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
