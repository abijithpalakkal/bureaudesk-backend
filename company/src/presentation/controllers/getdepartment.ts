import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"



export const getDepartmentController = (dependencies: any) => {
    const { useCases: { getDepartmentUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body,"😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁😂😊💕😘❤️🚀😁")
        try {
            const data = await getDepartmentUseCase(dependencies).execute(req.body)
            console.log(data,"😂😊💕😘❤️🚀😁")
            res.json({status:true,payload:data})
        } catch (err) {
            next(err)
        }
    }
}