
import { NextFunction, Request, Response } from "express"

export const addTaskController = (dependencies: any) => {
    const { useCases: { addTaskUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await addTaskUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err.message)
            next(err)
        }
    }
} 