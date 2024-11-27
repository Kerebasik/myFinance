import {createSlice} from "@reduxjs/toolkit";
import {currencyRateFetch, userInfoFetch} from "@/store/bankStore/actions.ts";
import {BankStore} from "@/types/redux/bankStore.ts";

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
            state.currencyRateLoading = true
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
            state.userDataError = payload as string
        })
    }
})

export default bankSlice.reducer