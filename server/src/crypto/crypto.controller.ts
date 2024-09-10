import { Controller, Post } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { Balance } from './crypto.types';

@Controller('crypto')
export class CryptoController {
	constructor(private readonly cryptoService: CryptoService) {}

	@Post('balance')
	async getBalance(): Promise<Balance[]> {
		return await this.cryptoService.getBalance();
	}
}
