
import { NextFunction, Request, Response } from "express"

export const getEventController = (dependencies: any) => {
    const { useCases: {getEventUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const obj={companyid:req.params.id}
            const data = await getEventUseCase(dependencies).execute(obj)
            console.log(data)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 