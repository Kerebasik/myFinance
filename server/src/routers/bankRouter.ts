import {Router} from "express";
import {RedisServiceInstance} from "../services/RedisService";
import {BankControllers} from "../controllers/BankControllers";

const bankRouter:Router = Router()

bankRouter.get("/currency-rate", BankControllers.CurrencyRate)

export {bankRouter}