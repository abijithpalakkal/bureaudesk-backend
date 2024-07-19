
import { NextFunction, Request, Response } from "express"

export const getTaskController = (dependencies: any) => {
    const { useCases: {getTaskUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        let data
        try {
            console.log("iam here in companys controller")
            if(req.body.taskName){
              const {taskName,...obj} = req.body
              const regex = new RegExp(taskName, 'i');
              data = await getTaskUseCase(dependencies).execute({taskName:{ $regex: regex },...obj})
            }else{
                data = await getTaskUseCase(dependencies).execute(req.body)
                console.log(data)
            }
             
            res.json({status:true,payload:data})
        } catch (err: any) {
            next(err)
        }
    }
} 