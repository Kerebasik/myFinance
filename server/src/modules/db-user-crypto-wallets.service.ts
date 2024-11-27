import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Wallets, Prisma } from '@prisma/client';

@Injectable()
export class DbUserCryptoWalletsService {
	constructor(private prisma: PrismaService) {}

	async addresses(params: { skip?: number; take?: number; cursor?: Prisma.WalletsWhereUniqueInput; where?: Prisma.WalletsWhereInput; orderBy?: Prisma.WalletsOrderByWithRelationInput }): Promise<Wallets[]> {
		const { skip, take, cursor, where, orderBy } = params;
		return this.prisma.wallets.findMany({ skip, take, cursor, where, orderBy });
	}

	async create(address: string, currency: string): Promise<Wallets> {
		return this.prisma.wallets.create({ data: { address, currency } });
	}

  async deleteUser(where: Prisma.WalletsWhereUniqueInput): Promise<Wallets> {
    return this.prisma.wallets.delete({
      where,
    });
  }
}
