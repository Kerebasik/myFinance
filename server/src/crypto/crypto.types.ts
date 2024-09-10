type Wallet = {
	address: string;
	currency: string;
};

type Balance = Wallet & { balance: number };

export { Wallet, Balance };
