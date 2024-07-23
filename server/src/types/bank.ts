type CurrencyRate =  {
    currencyCodeA: number,
    currencyCodeB: number,
    date: number,
    rateBuy: number,
    rateSell: number
}

type UserCard = {
    id: string,
    sendId: string,
    currencyCode: number,
    cashbackType: string,
    balance: number,
    creditLimit: number,
    maskedPan: [string],
    type: string,
    iban: string
}

type UserJar = {
    id: string,
    sendId: string,
    title: string,
    description: string,
    currencyCode: number,
    balance: number,
    goal: number
}

type UserInfo = {
    clientId: string,
    name: string,
    webHookUrl: string,
    permissions: string,
    accounts: [UserCard],
    jars: [UserJar]
}


export type {CurrencyRate, UserInfo, UserCard, UserJar}