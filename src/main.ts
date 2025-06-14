import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './config/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Main');

  try {
    logger.log('Starting server...');
    const app = await NestFactory.create(AppModule, {
      cors: true,
    });

    logger.log('Swagger setup...');
    const document = SwaggerModule.createDocument(app, setupSwagger);
    SwaggerModule.setup('api', app, document);

    logger.log('Validation pipe setup...');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );

    logger.log(`Server is running on port ${process.env.PORT ?? 3000}`);
    await app.listen(process.env.PORT ?? 3000);
  } catch (error) {
    logger.error('Error starting server', error);
    process.exit(1);
  } finally {
    logger.log('Server stopped');
  }
}
bootstrap();
