import {CurrencyRate, UserInfo} from "@/types/bank.ts";


type BankStore = {
    currencyRate: Array<CurrencyRate>,
    currencyRateLoading: boolean,
    currencyRateError: string | unknown,
    userData: UserInfo | undefined,
    userDataLoading: boolean,
    userDataError: string | unknown,
}

export type {BankStore}