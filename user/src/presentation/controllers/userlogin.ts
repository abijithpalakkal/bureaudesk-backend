import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";



export const getuserController=(dependencies:any)=>{
    const{useCases:{getUserUseCase}}=dependencies;
    
    return async(req:Request,res:Response,next:NextFunction)=>{
        
    try{
        const data=await getUserUseCase(dependencies).execute(req.body.id)
        console.log(data,"dhcuh kha vhes khb ")
        const token = jwt.sign({...data},'123456789ab', { expiresIn: '24h' })
        res.cookie('auth',token, {
         httpOnly: true,
         maxAge: 60 * 60 * 24 * 7, // 1 week
         // other options can be set here, such as secure, sameSite, etc.
       });
        res.json(data)
    }catch(error){
        next(error)
    }
       
       
    }
}