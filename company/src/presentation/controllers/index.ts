import { dependencies } from "../../config/dependencies";
import { createCompanyController } from "./createcompany";
import { getcompanyinfoController } from "./getcompanyinfo";
import { createDepartmentController } from "./createdepartment";
import { getDepartmentController } from "./getdepartment";
import { createTeamController } from "./createteam";
import { getTeamController } from "./getteam";
import { deleteTeamController } from "./deleteteam";
import { addEventController } from "./addevent";
import { getEventController } from "./getevents";
import { addTaskController } from "./addtask";
import { getTaskController } from "./gettask";
import { updateEventController } from "./updateevents";
import { deleteEventController } from "./deleteevent";

export const controllers = (dependencies: any) => {
    return {
        createcomapny: createCompanyController(dependencies),
        getcompanyinfo: getcompanyinfoController(dependencies),
        createdept: createDepartmentController(dependencies),
        getdpt:getDepartmentController(dependencies),
        createteam:createTeamController(dependencies),
        getteam:getTeamController(dependencies),
        deleteteam:deleteTeamController(dependencies),
        addevents:addEventController(dependencies),
        getEvents:getEventController(dependencies),
        addTask:addTaskController(dependencies),
        getTask:getTaskController(dependencies),
        updateevents:updateEventController(dependencies),
        deleteEvent:deleteEventController(dependencies)
    }
}