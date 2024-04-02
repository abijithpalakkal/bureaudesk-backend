import {Router} from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter=(dependencies:any)=>{
    const{getuserlogin}= controllers(dependencies)
    const router = Router();
    router.route("/getuserdetailsforlogin")
            .post(getuserlogin) 

    return router
}