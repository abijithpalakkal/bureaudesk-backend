import {Router} from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter=(dependencies:any)=>{
    const{getuser}= controllers(dependencies)
    const router = Router();
    router.route("/getuserdetails")
            .post(getuser) 

    return router
}