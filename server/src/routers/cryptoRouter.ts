import {Router} from "express";

const cryptoRouter = Router();

cryptoRouter.get("/", (req, res)=>{ res.json("crypto")})

export {cryptoRouter};