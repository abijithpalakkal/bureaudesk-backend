import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {
    const { createcomapny, getcompanyinfo, createdept, getdpt, createteam, getteam } = controllers(dependencies)
    const router = Router();
    router.route("/createcompany")
        .post(createcomapny)
    router.route("/getcompany/:id")
        .get(getcompanyinfo)
    router.route("/createdepartment")
        .post(createdept)
    router.route("/getdepartment/:id")
        .get(getdpt)
    router.route("/createteam")
        .post(createteam)
    router.route("/getteam/:id")
        .get(getteam)
    return router
}