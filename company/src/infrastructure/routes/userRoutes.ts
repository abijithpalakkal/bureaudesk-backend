import {Router} from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter=(dependencies:any)=>{
    const{createcomapny}= controllers(dependencies)
    const router = Router();
    router.route("/createcompany")
            .post(createcomapny) 

    return router
}