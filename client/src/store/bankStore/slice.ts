import {createSlice} from "@reduxjs/toolkit";
import {currencyRateFetch, userInfoFetch, userTransactionsFetch} from "@/store/bankStore/actions.ts";
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

const initialState: BankStore = {
    currencyRate: [],
    currencyRateLoading: false,
    currencyRateError: "",
    userData: undefined,
    userDataLoading: false,
    userDataError: "",
    transactions:[],
    transactionsLoading: false,
    transactionsError: "",
}

const bankSlice = createSlice({
    name: "bank",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(currencyRateFetch.pending, (state) => {
            state.currencyRateLoading = true;
        });
        builder.addCase(currencyRateFetch.rejected, (state, {payload}) => {
            state.currencyRateLoading = false;
            state.currencyRateError = payload as string;
        })
        builder.addCase(currencyRateFetch.fulfilled, (state, {payload}) => {
            state.currencyRateLoading = false;
            state.currencyRate = payload;
            state.currencyRateError = "";
        })
        builder.addCase(userInfoFetch.pending, (state) => {
            state.userDataLoading = true;
        })
        builder.addCase(userInfoFetch.fulfilled, (state, {payload}) => {
            state.userData = payload;
            state.userDataLoading = false;
            state.userDataError = "";
        })
        builder.addCase(userInfoFetch.rejected, (state, {payload})=>{
            state.userDataLoading = false;
            state.userDataError = payload as string;
        })
        builder.addCase(userTransactionsFetch.pending, (state)=>{
            state.transactionsLoading = true;
        })
        builder.addCase(userTransactionsFetch.fulfilled, (state, {payload})=>{
            state.transactions = payload;
            state.transactionsLoading = false;
        })
        builder.addCase(userTransactionsFetch.rejected, (state, {payload})=>{
            state.transactionsError = payload as string;
            state.transactionsLoading = false;
        })
    }
})

export default bankSlice.reducer