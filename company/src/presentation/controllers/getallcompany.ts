import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const getallcompanyinfoController = (dependencies: any) => {
 
    const { useCases: { getcompanyinfoUseCase  } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
       
        try {
            const data = await getcompanyinfoUseCase(dependencies).execute(null)
            res.json({ status: true, payload: data })
        } catch (err: any) {
            next(err.message)
        }
    }
}