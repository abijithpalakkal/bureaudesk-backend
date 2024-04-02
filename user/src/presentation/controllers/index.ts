import { dependencies } from "../../config/dependencies";
import { getuserforauthController } from "./getuser";
import { getuserController } from "./userlogin"; 

export const controllers=(dependencies:any)=>{
    return{
        getuserlogin:getuserController(dependencies),
        getuserforauth:getuserforauthController(dependencies)
    }
}