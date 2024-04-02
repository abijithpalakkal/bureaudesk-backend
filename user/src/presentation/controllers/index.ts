import { dependencies } from "../../config/dependencies";
import { getuserController } from "./userlogin"; 

export const controllers=(dependencies:any)=>{
    return{
        getuserlogin:getuserController(dependencies)
    }
}