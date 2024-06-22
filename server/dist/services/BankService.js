"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
const axios_1 = __importDefault(require("axios"));
const currencyCodsISO_1 = require("../constants/currencyCodsISO");
class BankService {
    constructor() {
        this.axiosInstance = axios_1.default.create({
            baseURL: "https://api.monobank.ua",
        });
    }
    getCurrencyRate() {
        return __awaiter(this, arguments, void 0, function* (currencyCodeISO = currencyCodsISO_1.CurrencyCodsISO.USD) {
            try {
                const responseFromBank = yield this.axiosInstance.get("/bank/currency");
                const currencyRate = responseFromBank.data.find((item) => item.currencyCodeA === currencyCodeISO);
                return currencyRate;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.BankService = BankService;
