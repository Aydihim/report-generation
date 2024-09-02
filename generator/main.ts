import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

//   const config = new DocumentBuilder()
//     .setTitle('Урок по продвинотому BACKEND')
//     .setDescription('Документация REST API')
//     .setVersion('1.0.0')
//     .addTag('Айдима')
//     .build();
//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
}

start();