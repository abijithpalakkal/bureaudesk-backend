
import { NextFunction, Request, Response } from "express"
import cron from 'node-cron';

export const submitTaskController = (dependencies: any) => {
    const { useCases: { addSubmittedTaskUseCase } } = dependencies;
 
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await addSubmittedTaskUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 