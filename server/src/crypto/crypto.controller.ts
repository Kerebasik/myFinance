import {Controller, Post} from "@nestjs/common";
import {CryptoService} from "./crypto.service";


@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Post("balance")
  async getBalance(){
    return await this.cryptoService.getBalance('0x888FADE4245335F3486cb72f5bac505273ACe83a')
  }
}
