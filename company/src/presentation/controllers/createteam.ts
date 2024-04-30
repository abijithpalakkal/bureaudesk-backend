import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const createTeamController = (dependencies: any) => {
  
    const { useCases: { createteamUseCase  } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = await createteamUseCase(dependencies).execute(req.body)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err?.message)
        }
    }
}