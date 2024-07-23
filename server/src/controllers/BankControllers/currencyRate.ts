import {Request, Response} from "express";
import {BankService} from "../../services/BankService";
import {ServerMessage, ServerStatus} from "../../enums/server";


const CurrencyRate = async (req: Request, res: Response) => {
    try {
        const currencyRaty = await new BankService().getCurrencyRate()
        return res.status(ServerStatus.Success).json(currencyRaty)
    } catch (e) {
        return res.status(ServerStatus.ServerError).json({message: ServerMessage.ServerError})
    }
}

export {CurrencyRate}