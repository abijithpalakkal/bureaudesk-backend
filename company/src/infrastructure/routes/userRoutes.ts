import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"

export const userRouter = (dependencies: any) => {
    const { createcomapny, getcompanyinfo, createdept, getdpt, createteam, getteam, deleteteam, addevents, deleteEvent, getEvents, addTask, updateevents, getTask } = controllers(dependencies)
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
    router.route("/deleteteam/:id")
        .get(deleteteam)
    router.route("/addevent")
        .post(addevents)
    router.route("/getevent")
        .post(getEvents)
    router.route("/addtask")
        .post(addTask)
    router.route("/gettask")
        .post(getTask)
    router.route("/updateevents/:id")
        .post(updateevents)
    router.route("/deleteevent/:id")
        .get(deleteEvent)
    return router
}