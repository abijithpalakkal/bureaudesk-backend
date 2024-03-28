import { user } from "../database/mongoDB/models/comapny";
import { createUser } from "./consumers/createUser";

export const createsubscriber=()=>{
    return{
        createUser:createUser
    }
    
}