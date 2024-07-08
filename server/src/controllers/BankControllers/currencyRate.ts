import {Request, Response} from "express";
import {BankService} from "../../services/BankService";


const CurrencyRate = async (req:Request, res:Response) =>{
    try {
        const currencyRaty = await new BankService().getCurrencyRate()
        return res.status(200).json(currencyRaty)
    } catch (e){
        return  res.status(500).json({message:"Server error"})
    }
}

export {CurrencyRate}