import { dependencies } from "../../config/dependencies";
import { createemployeeController } from "./createemployee";
import { getEmployeesController } from "./getemployees";
import { getuserforauthController } from "./getuser";
import { getUserDetailsController } from "./getuserdetails";
import { setManagerController } from "./setmanager";
import { updateUserController } from "./updateuser";
import { getuserController } from "./userlogin"; 

export const controllers=(dependencies:any)=>{
    return{
        getuserlogin:getuserController(dependencies),
        getuserforauth:getuserforauthController(dependencies),
        createuser:createemployeeController(dependencies),
        getemployees:getEmployeesController(dependencies),
        updateuser:updateUserController(dependencies),
        setmanager:setManagerController(dependencies),
        getuserdetails:getUserDetailsController(dependencies)
    }
}