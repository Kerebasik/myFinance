import {Router} from "express";
import {bankRouter} from "./bankRouter";
import {cryptoRouter} from "./cryptoRouter";

const router:Router = Router()

router.use("/bank", bankRouter)
router.use("/crypto", cryptoRouter)

export {router}

