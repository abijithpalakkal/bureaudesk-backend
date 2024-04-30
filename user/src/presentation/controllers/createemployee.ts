import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";
import generateRandomPassword from "../../utils/randompassword";
import { sendotp } from "../../services/otpservices";
import { sendUserInfo } from "../../infrastructure/kafka/producers/adduser";
import { hashPassword } from "../../utils/bcrypthash";



export const createemployeeController = (dependencies: any) => {
    const { useCases: { createUserUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
       
        try {
         
           const password=generateRandomPassword()
         
           const hashed=await hashPassword(password)
           const obj={
            email:req.body.email,
            password:hashed
           }
           const obj13={
            email:req.body.email,
            password
           }
           await sendotp(obj13)
          
           const obj1={
               ...req.body,
               password:hashed,
               Authorization:"basic_node"
           }
           const data=await createUserUseCase(dependencies).execute(obj1)
           const obj2={
            _id:data._id,
            email:req.body.email,
            password:hashed,
            Authorization:"basic_node"
           }
           sendUserInfo(obj2)
           res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }
    }
}