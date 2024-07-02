
import { NextFunction, Request, Response } from "express"

export const getProjectController = (dependencies: any) => {
    const { useCases: {getProjectUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("iam here in companys controller")
            const data = await getProjectUseCase(dependencies).execute(req.params.id)
            console.log(data)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 