import { Module } from '@nestjs/common';
import { BankModule } from './bank/bank.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
	imports: [BankModule, CryptoModule],
})
export class AppModule {}
