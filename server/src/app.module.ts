import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BankModule } from './bank/bank.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '../../.env',
			isGlobal: true,
		}),
		BankModule,
		CryptoModule,
	],
})
export class AppModule {}
