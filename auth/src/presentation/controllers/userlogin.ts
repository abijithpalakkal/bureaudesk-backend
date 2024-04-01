
import { NextFunction, Request, Response } from "express"


export const userLoginController = (dependencies: any) => {
    const { useCases: { getUserUseCase } } = dependencies
    return async (req: Request, res: Response,next:NextFunction) => {
        try{
            const data=await getUserUseCase(dependencies).execute(req.body)
            if(data==null){
                throw new Error("wrong username or password")
            }
            console.log(data,"utfdddddddddddddddA")
            res.json(data)
        }catch(error:any){
         
           next(error)
        }
    }

}