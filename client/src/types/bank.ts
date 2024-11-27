type CurrencyRate =  {
    currencyCodeA: Number,
    currencyCodeB: Number,
    date: Number,
    rateBuy: Number,
    rateSell: Number
}

type UserCard = {
<<<<<<< HEAD
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
=======
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

type UserTransaction = {
    id: string,
    time: number,
    description: string,
    mcc: number,
    originalMcc: number,
    amount: number,
    operationAmount: number,
    currencyCode: number,
    commissionRate: number,
    cashbackAmount: number,
    balance: number,
    hold: boolean,
    receiptId: string
}


export type {CurrencyRate, UserInfo, UserCard, UserJar, UserTransaction}
>>>>>>> e4cf16224e61d16e7c336188a8743b374d0720f3
