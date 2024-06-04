
import { NextFunction, Request, Response } from "express"
import cron from 'node-cron';

export const updateSubmittedTaskController = (dependencies: any) => {
    const { useCases: { updateSubmittedTaskUseCase  } } = dependencies;
 
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
             req.body.id=req.params.id
            const data = await updateSubmittedTaskUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 