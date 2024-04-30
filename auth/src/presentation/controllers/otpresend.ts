
import { NextFunction, Request, Response } from "express"
import { sendotp } from "../../services/otpservices"
import { error } from "console";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/createUserProducer";
import jwt from 'jsonwebtoken';



export const otpResendController = (dependencies:any) => {
 
    const { useCases: {otpUpdateUseCase,otpSignupUseCase} } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const otp= await sendotp(req.body.email)
           const data=await otpUpdateUseCase(dependencies).execute({email:req.body.email})
           await otpSignupUseCase(dependencies).execute({email:req.body.email,otp:otp})
           res.json({status:true,message:"successfully send otp"})
        }catch (err: any) {
          
            next(err)
        }
    }
}