import axios, {AxiosInstance, AxiosResponse, isAxiosError } from "axios";
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import {CurrencyRate, UserInfo, UserTransaction} from "../types/bank";
import {RedisServiceInstance} from "./RedisService";
import {BankCachedKey} from "../enums/cachedKey";

dayjs.extend(utc)
dayjs.extend(timezone)

class BankService {
    private axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://api.monobank.ua",
            headers: {
                'X-Token': process.env.MONO_TOKEN
            }
        })
    }

    async getCurrencyRate() {
        try {
            const responseFromBank: AxiosResponse<[CurrencyRate]> = await this.axiosInstance.get("/bank/currency")
            const currencyRate = responseFromBank.data
            await RedisServiceInstance.setItem(BankCachedKey.currencyRate, currencyRate)
            return currencyRate
        } catch (e: any) {
            if ( isAxiosError(e) && e?.response?.status === 429) {
                try {
                    return await RedisServiceInstance.getItem(BankCachedKey.currencyRate)
                } catch (e) {
                    console.error(e)
                    return null
                }
            }
        }
    }

    async getUserInfo() {
        try {
            const userInfoResponse: AxiosResponse<UserInfo> = await this.axiosInstance.get("/personal/client-info")
            const userInfo = userInfoResponse.data
            await RedisServiceInstance.setItem(BankCachedKey.userInfo, userInfo)
            return userInfo
        } catch (e: any) {
            if ( isAxiosError(e) && e?.response?.status === 429) {
                try {
                    return await RedisServiceInstance.getItem(BankCachedKey.userInfo)
                } catch (e) {
                    console.error(e)
                    return null
                }
            }
        }
    }

    async getUserTransactions(sendId: string) {
        try {
            const date = dayjs().tz("Europe/Kiev").unix();
            const [from, to] = [
                date - 2678400,
                date
            ]
            const {data: transactions} = await this.axiosInstance.get<[UserTransaction]>(`/personal/statement/${sendId}/${from}/${to}`)
            await RedisServiceInstance.setItem(BankCachedKey.userTransactions, transactions)
            return transactions
        } catch (e: any) {
            if ( isAxiosError(e) && e?.response?.status === 429) {
                try {
                    return await RedisServiceInstance.getItem(BankCachedKey.userTransactions)
                } catch (e) {
                    console.error(e)
                    return null
                }
            }
        }
    }
}

export {BankService}