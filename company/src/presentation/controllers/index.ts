import { dependencies } from "../../config/dependencies";
import { createCompanyController } from "./createcompany"; 

export const controllers=(dependencies:any)=>{
    return{
        createcomapny:createCompanyController (dependencies)
    }
}