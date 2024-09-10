import { Injectable } from '@nestjs/common';
import { CurrencyRate, UserInfo, UserTransaction } from '../types/bank';
import { UserBankDataService } from '../modules/user-bank-data.service';

@Injectable()
export class BankService {
	constructor(private userBankDataService: UserBankDataService) {}

	async getCurrencyRate(): Promise<[CurrencyRate]> {
		return await this.userBankDataService.getCurrencyRate();
	}

	async getUserInfo(): Promise<UserInfo> {
		return await this.userBankDataService.getUserInfo();
	}

	async getUserTransactions(sendId: string): Promise<[UserTransaction]> {
		return await this.userBankDataService.getUserTransactions(sendId);
	}
}
