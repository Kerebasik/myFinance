import {Router} from "express";
import {BankService} from "../services/BankService";

const bankRouter:Router = Router()

bankRouter.get("/currency-rate", async (req, res)=> {
    const {currencyCode} = req.query
   // const data = await new BankService().getCurrencyRate(currencyCode)

    return res.json('data')
})

export {bankRouter}