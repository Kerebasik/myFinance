import { Module } from '@nestjs/common';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';
import { BlockChainService } from '../modules/block-chain.service';
import { DbUserCryptoWalletsService } from '../modules/db-user-crypto-wallets.service';
import { PrismaService } from '../modules/prisma.service';

@Module({
	controllers: [CryptoController],
	providers: [CryptoService, BlockChainService, DbUserCryptoWalletsService, PrismaService],
})
export class CryptoModule {}
