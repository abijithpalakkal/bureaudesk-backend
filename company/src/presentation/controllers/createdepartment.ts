import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const createDepartmentController = (dependencies: any) => {
    const { useCases: { createDepartmentUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
       
        try {
            const data = await createDepartmentUseCase(dependencies).execute(req.body)
        
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
}