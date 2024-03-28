import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"



export const createCompanyController=(dependencies:any)=>{
    const{useCases:{createCompanyUseCase}}=dependencies;
    
    return async(req:Request,res:Response,next:NextFunction)=>{
        
    console.log(req.body)
    try{
        const data=await createCompanyUseCase(dependencies).execute(req.body)
        res.json(data._id)
    }catch(err:any){
        console.log(err?.message)
    }
       
       
    }
}