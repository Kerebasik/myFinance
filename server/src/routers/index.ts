import {Router} from "express";
import {bankRouter} from "./bankRouter";

const router:Router = Router()

router.use("/bank", bankRouter)

export {router}

