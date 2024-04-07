import { dependencies } from "../../config/dependencies";
import { createemployeeController } from "./createemployee";
import { getEmployeesController } from "./getemployees";
import { getuserforauthController } from "./getuser";
import { getuserController } from "./userlogin"; 

export const controllers=(dependencies:any)=>{
    return{
        getuserlogin:getuserController(dependencies),
        getuserforauth:getuserforauthController(dependencies),
        createuser:createemployeeController(dependencies),
        getemployees:getEmployeesController(dependencies)
    }
}