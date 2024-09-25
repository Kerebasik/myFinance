import { Injectable } from '@nestjs/common';
import { Web3 } from 'web3';
import BigNumber from 'bignumber.js';
import { Balance, Wallet } from '../crypto/crypto.types';

@Injectable()
export class BlockChainService {
  private web3: Web3;
	constructor() {
    this.web3 = new Web3('https://eth.llamarpc.com');
  }

	async getBalance(addresses: Array<Wallet> = []) {
		const balances: Array<Balance> = [];
		if (!!addresses.length) {
			for (const wallet of addresses) {
				const balanceWalletBigNum = this.web3.eth.getBalance(wallet.address);
				const balanceWallet = new BigNumber(balanceWalletBigNum.toString()).dividedBy(new BigNumber(10).pow(18)).toNumber();
				const balance: Balance = {
					currency: wallet.currency,
					address: wallet.address,
					balance: balanceWallet,
				};

				balances.push(balance);
			}
		}
		return balances;
	}
}
