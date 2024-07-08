import axios, {AxiosInstance, AxiosResponse} from "axios";
import {CurrencyCodsISO} from "../enums/currencyCodsISO";
import {CurrencyRate} from "../types/bank";
import {RedisServiceInstance} from "./RedisService";
import {cachedDataVersionTag} from "v8";

class BankService {
    private axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://api.monobank.ua",
            headers:{
                "X-Token":process.env.MONO_TOKEN
            }
        })
    }

    async getCurrencyRate() {
        try {
            const responseFromBank: AxiosResponse<[CurrencyRate]> = await this.axiosInstance.get("/bank/currency")
            const currencyRate = responseFromBank.data
            await RedisServiceInstance.setItem(`currencyRate`, currencyRate)
            return currencyRate
        } catch (e:any) {
            if (e.response.status === 429) {
                try {
                    return await RedisServiceInstance.getItem(`currencyRate`)
                } catch (e){
                    console.error(e)
                }
            }
        }
    }

}

export {BankService}