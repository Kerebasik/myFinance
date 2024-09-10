import { Body, Controller, Get, Post } from '@nestjs/common';
import { BankService } from './bank.service';
import { UserTransactionDto } from './dtos/request';
import { CurrencyRate, UserInfo, UserTransaction } from '../types/bank';

@Controller('bank')
export class BankController {
	constructor(private bankService: BankService) {}

	@Get('currency-rate')
	async getCurrencyRate(): Promise<CurrencyRate[]> {
		return await this.bankService.getCurrencyRate();
	}

	@Get('user-info')
	async getUserInfo(): Promise<UserInfo> {
		return await this.bankService.getUserInfo();
	}

	@Post('user-transactions')
	async getUserTransactions(@Body() body: UserTransactionDto): Promise<UserTransaction[]> {
		const { sendId } = body;
		return await this.bankService.getUserTransactions(sendId);
	}
}
