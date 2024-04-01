import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {
    const { createcomapny, getcompanyinfo } = controllers(dependencies)
    const router = Router();
    router.route("/createcompany")
        .post(createcomapny)
    router.route("/getcompany/:id")
        .get(getcompanyinfo)
    return router
}