import { dependencies } from "../../config/dependencies";
import { createCompanyController } from "./createcompany"; 
import { getcompanyinfoController } from "./getcompanyinfo";

export const controllers=(dependencies:any)=>{
    return{
        createcomapny:createCompanyController (dependencies),
        getcompanyinfo:getcompanyinfoController(dependencies)
    }
}