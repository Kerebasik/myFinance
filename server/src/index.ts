import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from "./routers";
import path from "path";
import cors from "cors"

dotenv.config({path : path.resolve("..", ".env")})

const PORT = process.env.SERVER_PORT || 5000

const app:Express = express()

app.use(cors())
app.use(express.json());
app.use("/api", router);

app.listen(PORT,()=>{
    console.log(`Server start..... PORT:${PORT}`)
})