import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {
    const { addchat, getchat } = controllers(dependencies)
    const router = Router();
    router.route("/addchat")
        .post(addchat)
    router.route("/getchat")
        .post(getchat)

    return router
}