import { user } from "../database/mongoDB/models/userSchema";
import { createUser } from "./consumers/createUser";

export const createsubscriber=()=>{
    return{
        createUser:createUser
    }
    
}