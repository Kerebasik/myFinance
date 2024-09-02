import { Body, Controller, Get, Post } from '@nestjs/common';
import { BankService } from './bank.service';
import { UserTransactionDto } from './dtos/request';

@Controller('bank')
export class BankController {
	constructor(private bankService: BankService) {}

	@Get('currency-rate')
	async getCurrencyRate() {
		return await this.bankService.getCurrencyRate();
	}

	@Get('user-info')
	async getUserInfo() {
		return await this.bankService.getUserInfo();
	}

	@Post('user-transactions')
	async getUserTransactions(@Body() body: UserTransactionDto) {
		const { sendId } = body;
		return await this.bankService.getUserTransactions(sendId);
	}
}
