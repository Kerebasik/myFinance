import { Injectable } from '@nestjs/common';
import {Web3} from "web3";
import BigNumber from "bignumber.js";

@Injectable()
export class CryptoService {
  private web3: Web3
  constructor() {
    this.web3 = new Web3('https://eth.llamarpc.com');
  }

  async getBalance(address: string):Promise<number> {
    const balance = await this.web3.eth.getBalance(address)
    const formatedBalance = new BigNumber(balance.toString()).dividedBy(new BigNumber(10).pow(18)).toNumber()
    return formatedBalance
  }
}
