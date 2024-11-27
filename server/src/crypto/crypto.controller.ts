import { Body, Controller, Post } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { Balance, Wallet } from './crypto.types';
import { DeleteWalletsDto, NewWalletDto } from './dtos/requests';

@Controller('crypto')
export class CryptoController {
	constructor(private readonly cryptoService: CryptoService) {}
  // todo
  //  расширить роут для получения всех адрессов и отправка по ним баланс
	@Post('balance')
	async getBalance(): Promise<Balance[]> {
		return await this.cryptoService.getBalance();
	}

  @Post('new-wallet')
  async newWallet( @Body() data: NewWalletDto ): Promise<Wallet> {
    const {address, currency} = data
    return await this.cryptoService.addAddress(address, currency)
  }
  // todo
  //  сделать роут для удаления кошелька из базы данных
  // @Post('delete-wallets')
  // async deleteWallets(@Body() data: DeleteWalletsDto): Promise<string>{
  //
  //   return "dsa"
  // }
}
