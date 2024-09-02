import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix('api');
	const configService = app.get(ConfigService);
	const port = configService.get<number>('SERVER_PORT') || 5000;

	await app.listen(port);
}
bootstrap();
