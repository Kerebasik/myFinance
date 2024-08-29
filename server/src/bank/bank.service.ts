import {Injectable} from '@nestjs/common';
import axios, {AxiosInstance} from "axios";
import {CurrencyRate, UserInfo, UserTransaction} from "../types/bank";
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

@Injectable()
export class BankService {
  private nbuAxiosInstance: AxiosInstance
  private monoAxiosInstance: AxiosInstance;

  constructor() {
    this.nbuAxiosInstance = axios.create({
      baseURL: "https://bank.gov.ua/NBUStatService/v1/statdirectory"
    })
    this.monoAxiosInstance = axios.create({
      baseURL: "https://api.monobank.ua",
      headers: {
        'X-Token': process.env.MONO_TOKEN
      }
    })
  }

  async getCurrencyRate() {
    const {data: currencyRates} = await this.nbuAxiosInstance.get<[CurrencyRate]>("/exchange?json");
    return currencyRates
  }

  async getUserInfo() {
    const {data: userInfo} = await this.monoAxiosInstance.get<UserInfo>("/personal/client-info")
    return userInfo
  }

  async getUserTransactions(sendId: string) {
    const date = dayjs().tz("Europe/Kiev").unix();
    const [from, to] = [
      date - 2678400,
      date
    ]
    const {data: transactions} = await this.monoAxiosInstance.get<[UserTransaction]>(`/personal/statement/${sendId}/${from}/${to}`)
    return transactions
  }


}
