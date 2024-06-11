import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {
    const { addchat, getchat,sendMessage ,getChatById} = controllers(dependencies)
    const router = Router();
    router.route("/addchat")
        .post(addchat)
    router.route("/getchat")
        .post(getchat)
    router.route("/sendmessage")
        .post(sendMessage)
        router.route("/getchatbyid/:id")
        .get(getChatById)

    return router
}