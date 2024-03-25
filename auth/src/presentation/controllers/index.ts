import { dependencies } from "../../config/dependencies";
import { userSignupcontroller } from "./otpsignup"; 

export const controllers=(dependencies:any)=>{
    return{
        otpsignup:userSignupcontroller(dependencies)
    }
}