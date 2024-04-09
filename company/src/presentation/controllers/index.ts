import { dependencies } from "../../config/dependencies";
import { createCompanyController } from "./createcompany";
import { getcompanyinfoController } from "./getcompanyinfo";
import { createDepartmentController } from "./createdepartment";
import { getDepartmentController } from "./getdepartment";
import { createTeamController } from "./createteam";
import { getTeamController } from "./getteam";

export const controllers = (dependencies: any) => {
    return {
        createcomapny: createCompanyController(dependencies),
        getcompanyinfo: getcompanyinfoController(dependencies),
        createdept: createDepartmentController(dependencies),
        getdpt:getDepartmentController(dependencies),
        createteam:createTeamController(dependencies),
        getteam:getTeamController(dependencies)
    }
}