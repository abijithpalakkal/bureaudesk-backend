import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const createCompanyController = (dependencies: any) => {
    const { useCases: { createCompanyUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body)
        try {
            const data = await createCompanyUseCase(dependencies).execute(req.body)
            const token = req.cookies.auth
            console.log(req.cookies.auth)
            if(process.env.SECRET_KEY){
                jwt.verify(token,process.env.SECRET_KEY, async (err: Error | null, decoded: any) => {
                    if (err) {
                        return res.status(401).json({ message: 'Unauthorized' });
                    }
                    console.log(decoded,"😘😘😘😘😘")
                    sendcomapanyid({ userid: decoded._id, companyid: data._id })
                    const payload = {
                        _id:decoded._id,
                        Authorization: decoded.Authorization,
                        email: decoded.email,
                        password: decoded.password,
                        companyid: data._id
                    }
                 
                    const token = jwt.sign(payload,'123456789ab', { expiresIn: '24h' })
                    res.cookie("auth", token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true
                    })
                    res.status(201).json({ status: true ,payload:data._id})
                });
            }
          
        } catch (err: any) {
            console.log(err?.message)
        }
    }
}