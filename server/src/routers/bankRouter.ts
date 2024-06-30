import {Router} from "express";
import {RedisServiceInstance} from "../services/RedisService";

const bankRouter:Router = Router()

bankRouter.get("/currency-rate", async (req, res)=> {
    const cachedData = await RedisServiceInstance.getItem('cachedData');
    if (cachedData) {
        // If data exists in the cache, return it
        console.log('work1')
        res.json(cachedData);
    } else {
        console.log("work2")
        // If data is not in the cache, fetch it from the source
        const dataToCache = { message: 'Data to be cached' };
        await RedisServiceInstance.setItem("cachedData", dataToCache)
        res.json(dataToCache);
    }
    return
})

export {bankRouter}