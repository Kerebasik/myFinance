import type {UserCard, UserInfo, UserJar} from "../types/bank";

class UserInfoDto {
    name: String
    accounts: [UserCard]
    jars:[UserJar]
    constructor(userInfo: UserInfo) {
        this.name = userInfo.name
        this.accounts = userInfo.accounts
        this.jars = userInfo.jars
    }
}

export {UserInfoDto}