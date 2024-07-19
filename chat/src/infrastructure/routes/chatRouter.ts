import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"
import jwtMiddleware from "../../middleware/jwtmiddleware"

export const userRouter = (dependencies: any) => {
    const { addchat, getchat,sendMessage ,getChatById} = controllers(dependencies)
    const router = Router();
    router.route("/addchat")
        .post(jwtMiddleware,addchat)
    router.route("/getchat")
        .post(jwtMiddleware,getchat)
    router.route("/sendmessage")
        .post(jwtMiddleware,sendMessage)
        router.route("/getchatbyid/:id")
        .get(jwtMiddleware,getChatById)

    return router
}