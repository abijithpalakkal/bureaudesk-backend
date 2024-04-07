
import { NextFunction, Request, Response } from "express"
import { sendotp } from "../../services/otpservices"
import { error } from "console";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/createUserProducer";
import jwt from 'jsonwebtoken';



export const logoutcontroller = () => {
    console.log("i am in controller")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
           console.log(req.cookies)
           res.clearCookie("auth")
           res.json({status:true,message:"successfully logged out"})
        }catch (err: any) {
            console.log(err?.message)
            res.json({ status: false })
        }
    }
}