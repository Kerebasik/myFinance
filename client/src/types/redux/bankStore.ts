import {CurrencyRate} from "@/types/bank.ts";

type BankStore = {
    currencyRate:Array<CurrencyRate>,
    currencyRateLoading:Boolean,
    currencyRateError:String
}

export type {BankStore}