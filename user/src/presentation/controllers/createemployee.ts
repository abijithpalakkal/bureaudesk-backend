import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";
import generateRandomPassword from "../../utils/randompassword";
import { sendotp } from "../../services/otpservices";
import { sendUserInfo } from "../../infrastructure/kafka/producers/adduser";



export const createemployeeController = (dependencies: any) => {
    const { useCases: { createUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
           console.log(req.body)
           const password=generateRandomPassword()
           const obj={
            email:req.body.email,
            password
           }
           await sendotp(obj)
           console.log("done")
           const obj1={
               ...req.body,
               password,
               Authorization:"basic_node"

           }
           
           const data=await createUserUseCase(dependencies).execute(obj1)
           const obj2={
            _id:data._id,
            email:req.body.email,
            password,
            Authorization:"basic_node"
           }
           sendUserInfo(obj2)
           res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }


    }
}