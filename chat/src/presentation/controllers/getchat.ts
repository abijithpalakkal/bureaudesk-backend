
import { NextFunction, Request, Response } from "express"

export const getChatController = (dependencies: any) => {
    const { useCases: { getChatUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await getChatUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err.message)
            next(err)
        }
    }
} 