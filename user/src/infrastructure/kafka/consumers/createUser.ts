import { user } from "../../database/mongoDB/models/userSchema";

export const createUser=async(data:any)=>{
    try{
        const data1 =await user.create(data)
    }catch(err:any){
        throw new Error(err?.message)
    }
     
}