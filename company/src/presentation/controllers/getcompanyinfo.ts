import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const getcompanyinfoController = (dependencies: any) => {
 
    const { useCases: { getcompanyinfoUseCase  } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
       
        try {
            const data = await getcompanyinfoUseCase(dependencies).execute(req.params.id)
            res.json(data)
        } catch (err: any) {
            console.log(err?.message)
        }
    }
}