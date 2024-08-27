import {Router} from "express";
import BankController from "../controllers/bank-controller";

const bankRouter = Router()

bankRouter.get("/currency-rate", BankController.currencyRate)
bankRouter.get("/user-info", BankController.UserInfo)
bankRouter.post("/user-transactions", BankController.UserTransactions)

export {bankRouter}