import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {CurrencyRate} from "@/types/bank.ts";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";

const axiosExample = axios.create({
        baseURL:"http://localhost:5000/api"
    }
)

export const currencyRateFetch = createAsyncThunk("currencyRate", async (_, thunkAPI)=>{
    try {
        const currencyRate = await axiosExample.get<Array<CurrencyRate>>('/bank/currency-rate')
        return currencyRate.data.filter((item)=> [CurrencyCodsISO.EUR, CurrencyCodsISO.USD].includes(item.currencyCodeA) && item.currencyCodeB === CurrencyCodsISO.UAH)
    } catch (e){
        return thunkAPI.rejectWithValue(e);
    }
})