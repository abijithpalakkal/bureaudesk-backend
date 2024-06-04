
import { NextFunction, Request, Response } from "express"
import cron from 'node-cron';

export const updateTaskController = (dependencies: any) => {
    const { useCases: { updateTaskUseCase } } = dependencies;
 
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.params.id)
             req.body.id=req.params.id
            const data = await updateTaskUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 