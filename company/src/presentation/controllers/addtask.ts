
import { NextFunction, Request, Response } from "express"
import { sendnotification } from "../../infrastructure/kafka/producers/insertuserid ";

export const addTaskController = (dependencies: any) => {
    const { useCases: { addTaskUseCase} } = dependencies;
    console.log("i am here")
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await addTaskUseCase(dependencies).execute(req.body)
            console.log("added task to ",data)
            res.json({status:true,payload:data})
            const obj={
                userId:req?.body?.assignedTo,
                notification:`new task (${req.body.taskName}) has been assigned to you`
            }
            await sendnotification(obj)
        } catch (err: any) {
            console.log(err.message)
            next(err)
        }
    }
} 