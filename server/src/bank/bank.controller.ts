import {Controller, Get, Post, Req} from '@nestjs/common';

@Controller("bank")
export class BankController {
    @Get("currency-rate")
    async getCurrencyRate(@Req() req) {

        return ""
    }

    @Get("user-info")
    async getUserInfo(@Req() req) {

    }

    @Post("user-transactions")
    async getUserTransactions(@Req() req) {

    }
}
