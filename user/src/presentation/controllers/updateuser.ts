import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";



export const updateUserController = (dependencies: any) => {
    const { useCases: {updateUserUseCase} } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try { 
            const obj={_id:req.params.id}
            const obj1={
                _id:req.params.id,
                obj:req.body
            }
            const data = await updateUserUseCase(dependencies).execute(obj1)
            console.log(data,"cbsbvh vw jv W V,W ")
            res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }
    }
}