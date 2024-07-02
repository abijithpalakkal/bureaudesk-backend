import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import { sendcomapanyid } from "../../infrastructure/kafka/producers/insertuserid ";
import jwt from "jsonwebtoken"
import { company } from "../../infrastructure/database/mongoDB/models/comapny";



export const getTeamController = (dependencies: any) => {
    const { useCases: { getTeamUseCase } } = dependencies;
    return async (req: Request, res: Response, next: NextFunction) => {
      
        try {
            let data=[]
             data = await getTeamUseCase(dependencies).execute({departmentid:req.params.id})
            if(data.length==0){
                console.log("yrp123")
                 data = await getTeamUseCase(dependencies).execute({companyId:req.params.id})
            }
            if(data.length==0){
                data = await getTeamUseCase(dependencies).execute({_id:req.params.id})
            }
         
            res.json({status:true,payload:data})
        } catch (err) {
            next(err)
        }
    }
}