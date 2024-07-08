type CurrencyRate =  {
    currencyCodeA: Number,
    currencyCodeB: Number,
    date: Number,
    rateBuy: Number,
    rateSell: Number
}

type UserCard = {
    id: String,
    sendId: String,
    currencyCode: Number,
    cashbackType: String,
    balance: Number,
    creditLimit: Number,
    maskedPan: Array<String>,
    type: String,
    iban: String
}

type UserJars = {
    id: String,
    sendId: String,
    title: String,
    description: String,
    currencyCode: Number,
    balance: Number,
    goal: Number
}

type UserInfo = {
    clientId: String,
    name: String,
    webHookUrl: String,
    permissions: String,
    accounts: Array<UserCard>,
    jars: Array<UserJars>
}

export type {CurrencyRate, UserInfo}