import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const deleteEventController = (dependencies: any) => {
   
    const { useCases: { deleteEventUseCase  } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            console.log("i am")
            console.log(req.params.id)
            const data = await deleteEventUseCase(dependencies).execute({_id:req.params.id})
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
}