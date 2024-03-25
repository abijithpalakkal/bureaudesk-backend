
import { NextFunction, Request, Response } from "express"
import { sendotp } from "../../services/otpservices"
import { error } from "console";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/createUserProducer";


export const userSignupcontroller = (dependencies: any) => {
    console.log("i am in controller")
    const { useCases: { otpSignupUseCase } } = dependencies;
    const { useCases: { verifyemailwithotp } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (req?.body?.otp) {

                const data = await verifyemailwithotp(dependencies).execute(req.body.email)
                console.log(data, "leaves,leaves")
                if (data.otp == req.body.otp) {
                    const obj={
                        email:req.body.email,
                        password:req.body.password
                    }
                    await userCreatedProducer(obj)
                    res.json({ status: true, payload: "verified" })
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
            res.json({ status: false })
        }

    }
}