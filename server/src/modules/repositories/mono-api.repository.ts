import { Injectable } from '@nestjs/common';
import { BankApiRepository } from './bank-api.repository';
import { UserInfo, UserTransaction } from '../../types/bank';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class MonoApiRepository extends BankApiRepository {
	constructor() {
		super('https://api.monobank.ua', { 'X-Token': String(process.env.MONO_TOKEN) });
	}

	async getUserInfo(): Promise<UserInfo> {
		const { data: userInfo } = await this.axiosInstance.get<UserInfo>('/personal/client-info');
		return userInfo;
	}

	async getUserTransactions(sendId: string): Promise<[UserTransaction]> {
		const date = dayjs().tz('Europe/Kiev').unix();
		const [from, to] = [date - 2678400, date];
		const { data: transactions } = await this.axiosInstance.get<[UserTransaction]>(`/personal/statement/${sendId}/${from}/${to}`);
		return transactions;
	}
}
