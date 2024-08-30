import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {CurrencyRate, UserInfo} from "@/types/bank.ts";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";

const axiosExample = axios.create({
        baseURL: "http://localhost:5000/api"
    }
)

export const currencyRateFetch = createAsyncThunk("bank/currencyRate", async (_, thunkAPI) => {
    try {
        const currencyRate = await axiosExample.get<Array<CurrencyRate>>('/bank/currency-rate')
        return currencyRate.data.filter((item) => [CurrencyCodsISO.EUR, CurrencyCodsISO.USD].includes(item.currencyCodeA) && item.currencyCodeB === CurrencyCodsISO.UAH)
    } catch (e) {
        const axiosError = e as AxiosError<{ message: string }>;
        return thunkAPI.rejectWithValue(axiosError?.response?.data?.message);
    }
})

export const userInfoFetch = createAsyncThunk("bank/userInfo", async (_, thunkAPI) => {
    try {
        const userInfo = await axiosExample.get<UserInfo>('/bank/user-info')
        return userInfo.data
    } catch (e) {
        const axiosError = e as AxiosError<{ message: string }>;
        return thunkAPI.rejectWithValue(axiosError.response?.data?.message);
    }
})
