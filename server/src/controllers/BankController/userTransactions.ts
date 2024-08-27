import {Response} from 'express';
import {ServerMessage, ServerStatus} from "../../enums/server";
import type {RequestBody} from "../../types/request";
import {BankService} from "../../services/BankService";
import type {UserTransactionsFilter} from "../../types/bank"

const UserTransactions = async (req:RequestBody<UserTransactionsFilter>, res: Response)=>{
    try {
        const {sendId} = req.body
        const transactions = await new BankService().getUserTransactions(sendId);
        res.status(ServerStatus.Success).json({transactions})
    } catch (e) {
        console.log(e)
        res.status(ServerStatus.ServerError).json({message:ServerMessage.ServerError});
    }
}

export {UserTransactions}