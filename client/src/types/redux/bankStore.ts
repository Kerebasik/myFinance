import {CurrencyRate, UserInfo, UserTransaction} from "@/types/bank.ts";

type BankStore = {
    currencyRate: Array<CurrencyRate>,
    currencyRateLoading: boolean,
    currencyRateError: string,
    userData: UserInfo | undefined,
    userDataLoading: boolean,
    userDataError: string,
    transactions: Array<UserTransaction>,
    transactionsLoading: boolean
    transactionsError: string
}

export type {BankStore}