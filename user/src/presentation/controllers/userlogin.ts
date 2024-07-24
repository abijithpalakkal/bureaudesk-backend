import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";



export const getuserController = (dependencies: any) => {
    const { useCases: { getUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const obj={_id:req.body.id}
            const data = await getUserUseCase(dependencies).execute(obj)
            const payload = {
                _id: data.id,
                email: data.email,
                Authorization: data.Authorization,
                password: data.password,
                companyid: data?.companyid
            }
            let token
            if(process.env.SECRET_KEY){
                token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' })
            }
            res.cookie('auth', token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7 * 1000,
            });
            res.json(data)
        } catch (error) {
            next(error)
        }
    }
}