
import { NextFunction, Request, Response } from "express"
import { sendotp } from "../../services/otpservices"
import { error } from "console";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/createUserProducer";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { hashPassword } from "../../utils/bcrypthash";




export const userSignupcontroller = (dependencies: any) => {
 
    const { useCases: { otpSignupUseCase } } = dependencies;
    const { useCases: { verifyemailwithotp } } = dependencies;
    const { useCases: { verifiedUserUseCase,getUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            if (req?.body?.otp) {

                const data = await verifyemailwithotp(dependencies).execute(req.body.email)
                const hahed=await hashPassword(req.body.password)
               
                if (data.otp == req.body.otp) {
                    const obj = {
                        email: req.body.email,
                        password: hahed,
                        Authorization: "root_node",
                    }
                    try {
                        const userData = await verifiedUserUseCase(dependencies).execute(obj)
                        await userCreatedProducer({ ...obj, _id: userData._id })
                        const payload = {
                          email:userData.email,
                          _id:userData._id
                        };
                        let token
                        if(process.env.SECRET_KEY){
                             token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' })
                        }
                        res.cookie("auth", token, {
                            httpOnly: true,
                            secure:true,
                            sameSite:"none"
                        })
                        res.json({ status: true, payload: "verified",data:{
                            _id:userData._id,
                          email:userData.email,
                          Authorization:userData.Authorization
                          

                        } })
                    } catch (err: any) {
                        throw new Error(err)
                    }                      
                } else {
                    res.json({ status: true, payload: "not verified" })
                }
            } else {
              const user=await getUserUseCase(dependencies).execute({email:req.body.email})
                if(user){
                    throw new Error("email already exist")
                }
                const otp = await sendotp(req.body.email)
                req.body.otp = otp
           
                const data = await otpSignupUseCase(dependencies).execute(req.body)
                res.json({ status: true })
            }
        }
        catch (err: any) {
          
            res.json({ status: false ,message:err?.message})
        }

    }
}