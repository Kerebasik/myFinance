import {Request, Response} from "express";
import {ServerMessage, ServerStatus} from "../../enums/server";
import {BankService} from "../../services/BankService";
import {UserInfoDto} from "../../dtos/userInfoDto";


const UserInfo = async (req: Request, res: Response) => {
    try {
        const userInfo = await new BankService().getUserInfo()
        return res.status(ServerStatus.Success).json(new UserInfoDto(userInfo))
    } catch (e){
        return res.status(ServerStatus.ServerError).json({message: ServerMessage.ServerError})
    }
}

export {UserInfo}