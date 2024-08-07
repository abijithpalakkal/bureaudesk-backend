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
import { updateTaskController } from "./updatetask";
import {submitTaskController} from "./submittask"
import {updateSubmittedTaskController} from "./updatesubmittedtask"
import {getSubmittedTaskController} from "./getsubmittedtask"
import { addProjectController } from "./addproject";
import { getProjectController } from "./getproject";
import { updateProjectController } from "./updateproject";
import { getallcompanyinfoController } from "./getallcompany";

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
        deleteEvent:deleteEventController(dependencies),
        updateTask:updateTaskController(dependencies),
        addSubmittedTask:submitTaskController(dependencies),
        updateSubmmittedTask:updateSubmittedTaskController(dependencies),
        getSubmittedTask:getSubmittedTaskController(dependencies),
        addProject:addProjectController(dependencies),
        getProject:getProjectController(dependencies),
        updateProject:updateProjectController(dependencies),
        getallcompany:getallcompanyinfoController(dependencies)
    }
}