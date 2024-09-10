type CurrencyRate = {
	r030: number;
	txt: string;
	rate: number;
	cc: string;
	exchangedate: string;
};

type UserCard = {
	id: string;
	sendId: string;
	currencyCode: number;
	cashbackType: string;
	balance: number;
	creditLimit: number;
	maskedPan: [string];
	type: string;
	iban: string;
};

type UserJar = {
	id: string;
	sendId: string;
	title: string;
	description: string;
	currencyCode: number;
	balance: number;
	goal: number;
};

type UserInfo = {
	clientId: string;
	name: string;
	webHookUrl: string;
	permissions: string;
	accounts: [UserCard];
	jars: [UserJar];
};

type UserTransaction = {
	id: string;
	time: number;
	description: string;
	mcc: number;
	originalMcc: number;
	amount: number;
	operationAmount: number;
	currencyCode: number;
	commissionRate: number;
	cashbackAmount: number;
	balance: number;
	hold: boolean;
	receiptId: string;
};

type UserTransactionsFilter = {
	sendId: string;
};

export type { CurrencyRate, UserInfo, UserCard, UserJar, UserTransaction, UserTransactionsFilter };
