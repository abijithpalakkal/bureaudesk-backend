 import { user } from "../models/userSchema";

 export const getUserRepo=async(data:any)=>{
    try{
        const newuser= await user.findOne(data)
        return newuser
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 