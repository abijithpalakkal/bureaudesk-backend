
import { NextFunction, Request, Response } from "express"
import cron from 'node-cron';

export const updateProjectController = (dependencies: any) => {
    const { useCases: { updateProjectUseCase } } = dependencies;
 
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
             req.body.id=req.params.id
            const data = await updateProjectUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 