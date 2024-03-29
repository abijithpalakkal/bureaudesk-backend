import { user } from "../database/mongoDB/models/userSchema";
import { createUser } from "./consumers/createUser";
import { updateUser } from "./consumers/updateuser";

export const createsubscriber=()=>{
    return{
        createUser:createUser,
        updateUser:updateUser
    }
}