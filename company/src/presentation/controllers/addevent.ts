
import { NextFunction, Request, Response } from "express"

export const addEventController = (dependencies: any) => {
    const { useCases: { addEventUseCase  } } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await addEventUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err?.message)
        }
    }
} 