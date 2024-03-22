import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"



export const userSignupcontroller=(dependencies:any)=>{
    console.log("i am in controller")
    const{useCases:{userSignupUseCase}}=dependencies;
    
    return async(req:Request,res:Response,next:NextFunction)=>{
        console.log("jdfsbh")
        console.log(req.body)
       const data=await userSignupUseCase(dependencies).execute(req.body)
    }
}