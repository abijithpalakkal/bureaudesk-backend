import {Router} from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter=(dependencies:any)=>{
    console.log("iam here")
    const{signup}= controllers(dependencies)
    const router = Router();
    router.route("/signup")
            .post(signup) 

    return router
}