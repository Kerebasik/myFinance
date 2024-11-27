import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { UserBankDataService } from '../modules/user-bank-data.service';
import { NbuApiRepository } from '../modules/repositories/nbu-api.repository';
import { MonoApiRepository } from '../modules/repositories/mono-api.repository';

@Module({
	controllers: [BankController],
	providers: [BankService, UserBankDataService, NbuApiRepository, MonoApiRepository],
})
export class BankModule {}
