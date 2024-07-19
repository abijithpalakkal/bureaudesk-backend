
import { NextFunction, Request, Response } from "express"
import { sendotp } from "../../services/otpservices"
import { error } from "console";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/createUserProducer";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Client } from '../../utils/redisClient'; // assuming redisClient is exported from another module
import { storeOtp } from "../../services/storeOtp";




export const updateUserController = (dependencies: any) => {

    const { useCases: { updateUserUseCase, getUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
     
        if (req.method == "PATCH") {
            try{
                console.log(req.body)
                const storedOtp = await Client.get(`otp:${req.body.email}`)
                console.log(req.body.otp, storedOtp)
                if(req.body.otp == storedOtp){
                    console.log("its true yaar",989999999999999999999999999999999999999888888888888889)
                    await updateUserUseCase(dependencies).execute(req.body)
                    res.json({status:true})
                }else{
                    throw new Error("invalid otp")
                }
            }catch(err:any){
                next(err)

            }
            
        } else {
            try {
                console.log("i am here", req.body)
                const data = await getUserUseCase(dependencies).execute({ email: req.body.email })
                const isMatch: boolean = await bcrypt.compare(req.body.currentPassword, data.password)

                if (isMatch) {
                    const otp = await sendotp(req.body.email, true)
                    console.log(otp,"otp")
                    await storeOtp(req.body.email, otp)
                    
                    res.json({ status: true, message: "successfully send otp", payload: data })
                    
                } else {
                    throw new Error("wrong password")
                }
                //    const data=await otpUpdateUseCase(dependencies).execute({email:req.body.email})
                //    await otpSignupUseCase(dependencies).execute({email:req.body.email,otp:otp})
                //    res.json({status:true,message:"successfully send otp"})
            } catch (err: any) {

                next(err)
            }
        }

    }
}