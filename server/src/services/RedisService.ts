import Redis from "ioredis";
import {isNull} from "util";

const REDIS_PASSWORD = process.env.REDIS_PASSWORD
const REDIS_HOST = process.env.REDIS_HOST
const REDIS_PORT = process.env.REDIS_PORT
const REDIS_USERNAME = process.env.REDIS_UASERNAME
const REDIS_DATABASES = process.env.REDIS_DATABASES

class RedisService {
    private redisClient: Redis | null = null
    private readonly initRedis = {
        port: Number(REDIS_PORT),
        host: REDIS_HOST,
        username: REDIS_USERNAME,
        password: String(REDIS_PASSWORD),
        db: Number(REDIS_DATABASES),
    }
    private constructor() {
        this.redisClient = new Redis(this.initRedis)
    }

    private get Instance(){

    }

    static async getItem(key:string){
        if(this. === null){
            this.instance = new RedisService()
        }
        try{
            const item = await this.redisClient?.get(key) || ""
            return await JSON.parse(item)
        }catch (e){
            console.error(e)
        }

    }

    async setItem(key:string,value:object | number | string | Array<string | number | object> ){
        try {
            const jsonValue =JSON.stringify(value)
            console.log(jsonValue)
           // await this.redisClient?.set(key, jsonValue)
        } catch (e){
            console.error(e)
        }
    }
}

const RedisServiceInstance = new RedisService()

export {RedisServiceInstance}

