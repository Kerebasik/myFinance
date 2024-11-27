import { Injectable } from '@nestjs/common';
import { BankApiRepository } from './bank-api.repository';
import { CurrencyRate } from '../../types/bank';

@Injectable()
export class NbuApiRepository extends BankApiRepository {
	constructor() {
		super('https://bank.gov.ua/NBUStatService/v1/statdirectory');
	}

	async getCurrencyRate(): Promise<[CurrencyRate]> {
		const { data: currencyRates } = await this.axiosInstance.get<[CurrencyRate]>('/exchange?json');
		return currencyRates;
	}
}
