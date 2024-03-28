
import { NextFunction, Request, Response } from "express"
import { sendotp } from "../../services/otpservices"
import { error } from "console";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/createUserProducer";
import jwt from 'jsonwebtoken';



export const userSignupcontroller = (dependencies: any) => {
    console.log("i am in controller")
    const { useCases: { otpSignupUseCase } } = dependencies;
    const { useCases: { verifyemailwithotp } } = dependencies;
    const { useCases: { verifiedUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.body,"hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            if (req?.body?.otp) {

                const data = await verifyemailwithotp(dependencies).execute(req.body.email)
                console.log(data, "leaves,leaves")
                if (data.otp == req.body.otp) {
                    const obj = {
                        email: req.body.email,
                        password: req.body.password,
                        Authorization: "root_node",
                    }
                    try {
                        const userData = await verifiedUserUseCase(dependencies).execute(obj)
                        await userCreatedProducer({ ...obj, _id: userData._id })
                        const payload = {
                          ...userData
                        };
                        const token = jwt.sign(payload, '123456789ab', { expiresIn: '24h' })
                        res.cookie("auth", token, {
                            maxAge: 1000 * 60 * 60 * 24,
                            httpOnly: true
                        })
                        res.json({ status: true, payload: "verified",data:{
                            id:userData._id,
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
                const otp = await sendotp(req.body.email)
                req.body.otp = otp
                console.log(otp)
                const data = await otpSignupUseCase(dependencies).execute(req.body)
                res.json({ status: true })
            }

        }


        catch (err: any) {
            console.log(err?.message)
            res.json({ status: false })
        }

    }
}