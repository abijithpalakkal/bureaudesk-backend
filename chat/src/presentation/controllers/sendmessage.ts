
import { NextFunction, Request, Response } from "express"

export const sendMessageController = (dependencies: any) => {
    const { useCases: { sendMessageUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await sendMessageUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err.message)
            next(err)
        }
    }
} 