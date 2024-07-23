import axios, {AxiosInstance, AxiosResponse} from "axios";
import {CurrencyRate, UserInfo} from "../types/bank";
import {RedisServiceInstance} from "./RedisService";
import {BankCachedKey} from "../enums/cachedKey";

class BankService {
    private axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://api.monobank.ua",
            headers:{
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
        } catch (e:any) {
            if (e.response.status === 429) {
                try {
                    return await RedisServiceInstance.getItem(BankCachedKey.currencyRate)
                } catch (e){
                    console.error(e)
                }
            }
        }
    }

    async getUserInfo(){
        try {
            const userInfoResponse:AxiosResponse<UserInfo> = await this.axiosInstance.get("/personal/client-info")
            const userInfo = userInfoResponse.data
            await RedisServiceInstance.setItem(BankCachedKey.userInfo, userInfo)
            return userInfo
        } catch (e:any){
            if (e.response.status === 429) {
                try {
                    return await RedisServiceInstance.getItem(BankCachedKey.userInfo)
                } catch (e){
                    console.error(e)
                }
            }
        }
    }

}

export {BankService}