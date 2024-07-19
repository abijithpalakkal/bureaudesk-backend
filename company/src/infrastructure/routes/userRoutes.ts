import { Router } from "express"
import { NextFunction, Request, Response } from "express"
import { controllers } from "../../presentation/controllers"
import jwtMiddleware from "../../middleware/jwtmiddleware"

export const userRouter = (dependencies: any) => {
    const { createcomapny, getcompanyinfo,getallcompany, createdept, getdpt, createteam, getteam, updateTask, deleteteam, addevents, deleteEvent, getEvents, addTask, updateevents, getTask, addSubmittedTask, updateSubmmittedTask, getSubmittedTask, addProject, getProject,updateProject } = controllers(dependencies)
    const router = Router();
    router.route("/createcompany")
        .post(createcomapny)
    router.route("/getcompany/:id")
        .get(getcompanyinfo)
        router.route("/getallcompany")
        .get(getallcompany)
    router.route("/createdepartment")
        .post(createdept)
    router.route("/getdepartment/:id")
        .get(jwtMiddleware,getdpt)
    router.route("/createteam")
        .post(jwtMiddleware,createteam)
    router.route("/getteam/:id")
        .get(jwtMiddleware,getteam)
    router.route("/deleteteam/:id")
        .get(jwtMiddleware,deleteteam)
    router.route("/addevent")
        .post(jwtMiddleware,addevents)
    router.route("/getevent")
        .post(jwtMiddleware,getEvents)
    router.route("/addtask")
        .post(jwtMiddleware,addTask)
    router.route("/gettask")
        .post(jwtMiddleware,getTask)
    router.route("/updateevents/:id")
        .post(jwtMiddleware,updateevents)
    router.route("/deleteevent/:id")
        .get(jwtMiddleware,deleteEvent)
    router.route("/updatetask/:id")
        .post(jwtMiddleware,updateTask)
    router.route("/submittask")
        .post(jwtMiddleware,addSubmittedTask)
    router.route("/getsubmittask")
        .post(jwtMiddleware,getSubmittedTask)
    router.route("/addproject")
        .post(jwtMiddleware,addProject)
    router.route("/getprojects/:id")
        .get(jwtMiddleware,getProject)
    router.route("/updateprojects/:id")
        .patch(jwtMiddleware,updateProject)

    return router
}