import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const deleteTeamController = (dependencies: any) => {
   
    const { useCases: { deleteTeamUseCase  } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = await deleteTeamUseCase(dependencies).execute(req.params.id)
            res.json({status:true,payload:data})
        } catch (err: any) {
            console.log(err?.message)
        }
    }
}