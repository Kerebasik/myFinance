import {CurrencyRate, UserInfo} from "@/types/bank.ts";


type BankStore = {
    currencyRate: Array<CurrencyRate>,
    currencyRateLoading: boolean,
    currencyRateError: string,
    userData: UserInfo | undefined,
    userDataLoading: boolean,
    userDataError: string,
}

export type {BankStore}