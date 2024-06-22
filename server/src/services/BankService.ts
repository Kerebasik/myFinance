import axios, {AxiosInstance, AxiosResponse} from "axios";
import {CurrencyCodsISO} from "../constants/currencyCodsISO";
import {CurrencyRate} from "../types/bank";

class BankService{
    private axiosInstance:AxiosInstance
    constructor() {
        this.axiosInstance = axios.create({
            baseURL:"https://api.monobank.ua",
        })
    }

    async getCurrencyRate(currencyCodeISO: number = CurrencyCodsISO.USD){
        try {
            const responseFromBank:AxiosResponse<[CurrencyRate]> = await this.axiosInstance.get("/bank/currency")
            const currencyRate =  responseFromBank.data.find((item)=> item.currencyCodeA === currencyCodeISO)
            return currencyRate
        } catch (e) {
            console.error(e)
        }
    }

}

export {BankService}