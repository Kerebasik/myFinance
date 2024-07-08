import {createAsyncThunk} from "@reduxjs/toolkit";
import {CurrencyRate} from "@/types/bank.ts";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";
import {axiosInstance} from "@/configs/axios.ts";
import axios, {AxiosError} from "axios";

export const currencyRateFetch = createAsyncThunk("currencyRate", async (_, thunkAPI)=>{
    try {
        const currencyRate = await axiosInstance.get<Array<CurrencyRate>>('/bank/currency-rate')
        return currencyRate.data.filter((item)=> [CurrencyCodsISO.EUR, CurrencyCodsISO.USD].includes(item.currencyCodeA) && item.currencyCodeB === CurrencyCodsISO.UAH)
    } catch (e){
        if (axios.isAxiosError(e)) {
            const axiosError = e as AxiosError<{message:string}>;
            return thunkAPI.rejectWithValue(axiosError.response?.data.message);
        } else {
            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
    }
})