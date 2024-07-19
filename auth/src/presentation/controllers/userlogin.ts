
import { NextFunction, Request, Response } from "express"
import bcrypt from 'bcrypt';


export const userLoginController = (dependencies: any) => {
    const { useCases: { getUserUseCase } } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
console.log("i am here")

            const data = await getUserUseCase(dependencies).execute({email:req.body.email})
            console.log(data)
            if (data == null || undefined) {
                throw new Error("wrong username or password")
            }
            if (data) {
                const isMatch: boolean = await bcrypt.compare(req.body.password,data.password)
                if (!isMatch) {
                    throw new Error("wrong username or password")
                }
            }
           
            res.json(data)
        } catch (error: any) {

            next(error)
        }
    }

}