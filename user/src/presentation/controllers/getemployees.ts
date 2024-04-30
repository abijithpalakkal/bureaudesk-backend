import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";



export const getEmployeesController = (dependencies: any) => {
    const { useCases: { getEmployeesUseCase} } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try { 
            const obj={Departmentid:req.params.id}
         
            const data = await getEmployeesUseCase(dependencies).execute(obj)
           
            res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }
    }
}