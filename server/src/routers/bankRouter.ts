import {Router} from "express";
import * as BankControllers from "../controllers/BankControllers";

const bankRouter:Router = Router()

bankRouter.get("/currency-rate", BankControllers.CurrencyRate)
bankRouter.get("/user-info", BankControllers.UserInfo)

export {bankRouter}