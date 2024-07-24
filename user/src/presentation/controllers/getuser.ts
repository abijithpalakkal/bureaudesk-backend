import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";
import dotenv from "dotenv";
dotenv.config();




export const getuserforauthController = (dependencies: any) => {
    const { useCases: { getUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            
           if(process.env.SECRET_KEY){
            var decodedtoken:any=await verifyToken(req.cookies.auth,process.env.SECRET_KEY)
           }
            const obj={_id:decodedtoken._id}
            const data = await getUserUseCase(dependencies).execute(obj)
           
            res.json({status:true,payload:data})
        } catch (error) {
            next(error)
        }


    }
}