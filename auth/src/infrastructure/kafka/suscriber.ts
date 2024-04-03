import { addUser } from "./consumers/adduser";

export const createsubscriber=()=>{
    return{
        addUser:addUser,
       
    }
}