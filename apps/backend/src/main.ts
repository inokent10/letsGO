import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('LetsGO API')
    .setDescription('Сервис для поиска попутчиков в путешествия')
    .setVersion('1.0')
    .addTag('app')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({transform: true, skipMissingProperties: true}))
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
