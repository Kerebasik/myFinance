import {createSlice} from "@reduxjs/toolkit";
import {currencyRateFetch} from "@/store/bankStore/actions.ts";
import {BankStore} from "@/types/redux/bankStore.ts";

const initialState:BankStore = {
    currencyRate:[],
    currencyRateLoading:false,
    currencyRateError:""
}


const bankSlice = createSlice({
    name:"bank",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(currencyRateFetch.pending.type,(state)=>{
            state.currencyRateLoading = true
        });
        builder.addCase(currencyRateFetch.rejected.type, (state, action:any)=>{
            state.currencyRateLoading = false;
            state.currencyRateError = action.payload;
        })
        builder.addCase(currencyRateFetch.fulfilled.type,(state, action:any)=>{
            state.currencyRateLoading = false;
            state.currencyRate = action.payload;
            state.currencyRateError = "";
        })
    }
})

export default bankSlice.reducer