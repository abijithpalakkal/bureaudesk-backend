import { dependencies } from "../../config/dependencies";
import { userSignupcontroller } from "./usersignup"; 

export const controllers=(dependencies:any)=>{
    return{
        signup:userSignupcontroller(dependencies)
    }
}