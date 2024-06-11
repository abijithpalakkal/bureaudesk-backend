
import { NextFunction, Request, Response } from "express"

export const getChatByIdController = (dependencies: any) => {
    const { useCases: { getMessageUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const data = await getMessageUseCase(dependencies).execute(id)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err.message)
            next(err)
        }
    }
} 