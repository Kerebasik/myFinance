import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as process from 'node:process';

dotenv.config({ path: `../../.env` });

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix('api');
	const port = Number(process.env.SERVER_PORT) || 5000;

	await app.listen(port);
}
bootstrap();
