import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import path from "path";
import {BankController} from "./bank/bank.controller";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: "../../.env",
            isGlobal: true,
        })
    ],
    controllers: [BankController],
})
export class AppModule {}
