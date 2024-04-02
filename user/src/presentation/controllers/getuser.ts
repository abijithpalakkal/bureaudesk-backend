import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";



export const getuserforauthController = (dependencies: any) => {
    const { useCases: { getUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
           
            const decodedtoken:any=await verifyToken(req.cookies.auth,'123456789ab')
            const obj={_id:decodedtoken._id}
            const data = await getUserUseCase(dependencies).execute(obj)
            console.log(data,"cbsbvh vw jv W V,W ")
            res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }


    }
}