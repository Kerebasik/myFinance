import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

type AxiosHeaders = {
	[key: string]: string;
};

@Injectable()
export class BankApiRepository {
	protected axiosInstance: AxiosInstance;

	constructor(url: string, headers: AxiosHeaders = {}) {
		this.axiosInstance = axios.create({
			baseURL: url,
			headers: headers,
		});
	}
}
