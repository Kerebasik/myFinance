import {createAsyncThunk} from "@reduxjs/toolkit";
<<<<<<< HEAD
import {CurrencyRate} from "@/types/bank.ts";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";
import {axiosInstance} from "@/configs/axios.ts";
import axios, {AxiosError} from "axios";
=======
import axios, {AxiosError} from "axios";
import {CurrencyRate, UserInfo} from "@/types/bank.ts";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";

const axiosExample = axios.create({
        baseURL: "http://localhost:5000/api"
    }
)
>>>>>>> e4cf16224e61d16e7c336188a8743b374d0720f3

export const currencyRateFetch = createAsyncThunk("bank/currencyRate", async (_, thunkAPI) => {
    try {
<<<<<<< HEAD
        const currencyRate = await axiosInstance.get<Array<CurrencyRate>>('/bank/currency-rate')
        return currencyRate.data.filter((item)=> [CurrencyCodsISO.EUR, CurrencyCodsISO.USD].includes(item.currencyCodeA) && item.currencyCodeB === CurrencyCodsISO.UAH)
    } catch (e){
        if (axios.isAxiosError(e)) {
            const axiosError = e as AxiosError<{message:string}>;
            return thunkAPI.rejectWithValue(axiosError.response?.data.message);
        } else {
            return thunkAPI.rejectWithValue('An unknown error occurred');
        }
=======
        const currencyRate = await axiosExample.get<Array<CurrencyRate>>('/bank/currency-rate')
        return currencyRate.data.filter((item) => [CurrencyCodsISO.EUR, CurrencyCodsISO.USD].includes(item.currencyCodeA) && item.currencyCodeB === CurrencyCodsISO.UAH)
    } catch (e) {
        const axiosError = e as AxiosError<{ message: string }>;
        return thunkAPI.rejectWithValue(axiosError?.response?.data?.message);
>>>>>>> e4cf16224e61d16e7c336188a8743b374d0720f3
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
