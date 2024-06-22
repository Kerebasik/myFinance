import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {router} from "./routers";

dotenv.config()

const PORT = process.env.PORT

const app:Express = express()

app.use(express.json());
app.use("/api", router);

app.listen(PORT,()=>{
    console.log(`Server start..... PORT:${PORT}`)
})