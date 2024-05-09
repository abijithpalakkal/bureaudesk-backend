
import { NextFunction, Request, Response } from "express"
import cron from 'node-cron';

export const updateEventController = (dependencies: any) => {
    const { useCases: { updateEventUseCase  } } = dependencies;
 
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
             req.body.id=req.params.id
            const data = await updateEventUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err?.message)
        }
    }
} 