import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {
    const { getuserlogin, getuserforauth, createuser,getemployees } = controllers(dependencies)
    const router = Router();
    router.route("/getuserdetailsforlogin")
        .post(getuserlogin)
    router.route("/getuserforauth")
        .get(getuserforauth)
    router.route("/addemployee")
        .post(createuser)
    router.route("/getdepartmentemployee/:id")
        .get( getemployees)
    return router
}