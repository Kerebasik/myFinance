import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {BankModule} from "./bank/bank.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: "../../.env",
            isGlobal: true,
        }),
        BankModule
    ]
})
export class AppModule {}
