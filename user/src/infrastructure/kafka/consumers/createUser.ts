import { user } from "../../database/mongoDB/models/userSchema";

export const createUser=async(data:any)=>{
    try{
        console.log(data,"byebyebye")
        const data1 =await user.create(data)
    }catch(err:any){
        throw new Error(err?.message)
    }
     
}