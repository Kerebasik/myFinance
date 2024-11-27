import { Injectable } from '@nestjs/common';
import { MonoApiRepository } from './repositories/mono-api.repository';
import { NbuApiRepository } from './repositories/nbu-api.repository';

@Injectable()
export class UserBankDataService {
	constructor(
		private monoApiRepository: MonoApiRepository,
		private nbuApiRepository: NbuApiRepository,
	) {}

	async getCurrencyRate() {
		return this.nbuApiRepository.getCurrencyRate();
	}

	async getUserInfo() {
		return this.monoApiRepository.getUserInfo();
	}

	async getUserTransactions(sendId: string) {
		return this.monoApiRepository.getUserTransactions(sendId);
	}
}
