import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"
import jwtMiddleware from "../../middleware/jwtmiddleware"

export const userRouter = (dependencies: any) => {
    const { getuserlogin, getuserforauth, createuser, getemployees, updateuser, setmanager ,getuserdetails} = controllers(dependencies)
    const router = Router();
    router.route("/getuserdetailsforlogin")
        .post(getuserlogin)
    router.route("/getuserforauth")
        .get(getuserforauth)
    router.route("/addemployee")
        .post(jwtMiddleware,createuser)
    router.route("/getdepartmentemployee/:id")
        .get(jwtMiddleware,getemployees)
    router.route("/updateuser/:id")
        .post(jwtMiddleware,updateuser)
    router.route("/getuserbyid/:id")
        .get(jwtMiddleware,updateuser)
    router.route("/setmanager")
        .post(jwtMiddleware,setmanager)
    router.route("/getuserdetails")
        .post(jwtMiddleware,getuserdetails)
    return router
}