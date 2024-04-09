import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";



export const getEmployeesbyidController = (dependencies: any) => {
    const { useCases: { getEmployeesUseCase} } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try { 
            const obj={_id:req.params.id}
            console.log(req.params.id)
            const data = await  getEmployeesUseCase(dependencies).execute(obj)
            console.log(data,"cbsbvh vw jv W V,W ")
            res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }
    }
}