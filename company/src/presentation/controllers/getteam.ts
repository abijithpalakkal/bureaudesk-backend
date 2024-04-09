import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const getTeamController = (dependencies: any) => {
    const { useCases: { getTeamUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.params.id,"😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁")
        try {
            const data = await getTeamUseCase(dependencies).execute({departmentid:req.params.id})
            console.log(data,"😂😊💕😘❤️🚀😁")
            res.json({status:true,payload:data})
        } catch (err) {
            next(err)
        }
    }
}