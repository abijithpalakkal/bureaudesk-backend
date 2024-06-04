
import { NextFunction, Request, Response } from "express"

export const getSubmittedTaskController = (dependencies: any) => {
    const { useCases: {getSubmittedTaskUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("iam here in companys controller")
            const data = await getSubmittedTaskUseCase(dependencies).execute(req.body)
            console.log(data)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 