import { dependencies } from "../../config/dependencies";
import { getuserController } from "./usersignup"; 

export const controllers=(dependencies:any)=>{
    return{
        getuser:getuserController(dependencies)
    }
}