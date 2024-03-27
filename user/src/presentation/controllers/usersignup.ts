import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"



export const getuserController=(dependencies:any)=>{
    console.log('hellooooooooooooooooooooooooo')
    const{useCases:{getUserUseCase}}=dependencies;
    
    return async(req:Request,res:Response,next:NextFunction)=>{
        
    
       const data=await getUserUseCase(dependencies).execute(req.body.id)
       
    }
}