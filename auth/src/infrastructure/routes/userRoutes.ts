import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {

        console.log("i am here")
        const { otpsignup, userlogin, userlogout, updateuser, otpResend } = controllers(dependencies)
        const router = Router();
        router.route("/otpsignup")
                .post(otpsignup)
        router.route("/login")
                .post(userlogin)
        router.route("/logout")
                .get(userlogout)
        router.route("/otpresend")
                .post(otpResend)
        router.route("/updateuser")
                .post(updateuser).patch(updateuser)
        return router
}