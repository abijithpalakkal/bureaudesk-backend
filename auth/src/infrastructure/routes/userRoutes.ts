import {Router} from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter=(dependencies:any)=>{
    
    console.log("i am here")
    const {otpsignup,userlogin} = controllers(dependencies)
    const router = Router();
    router.route("/otpsignup")
            .post(otpsignup) 
    router.route("/login")
            .post(userlogin)
    return router
}