import { dependencies } from "../../config/dependencies";
import { userSignupcontroller } from "./otpsignup"; 
import { userLoginController } from "./userlogin";

export const controllers=(dependencies:any)=>{
    return{
        otpsignup:userSignupcontroller(dependencies),
        userlogin:userLoginController(dependencies)
    }
}