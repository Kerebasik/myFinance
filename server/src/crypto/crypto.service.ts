import { Injectable } from '@nestjs/common';
import { BlockChainService } from '../modules/block-chain.service';
import { DbUserCryptoWalletsService } from '../modules/db-user-crypto-wallets.service';
import { Balance } from './crypto.types';

@Injectable()
export class CryptoService {
	constructor(
		private blockCainService: BlockChainService,
		private dbUserCryptoWalletsService: DbUserCryptoWalletsService,
	) {}

	async getBalance(): Promise<Array<Balance>> {
		const address = await this.dbUserCryptoWalletsService.addresses({});
		return await this.blockCainService.getBalance(address);
	}
}
