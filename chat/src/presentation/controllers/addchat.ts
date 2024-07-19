
import { NextFunction, Request, Response } from "express"

export const addChatController = (dependencies: any) => {
    const { useCases: { addChatUseCase } } = dependencies;
    console.log("i am here")

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await addChatUseCase(dependencies).execute(req.body)
            res.json({ status: true, payload: data })
        } catch (err: any) {
            console.log(err.message)
            next(err)
        }
    }
} 