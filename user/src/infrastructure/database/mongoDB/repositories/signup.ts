 import { user } from "../models/userSchema";

 export const signup=async(data:any)=>{
    try{
        const newuser= await user.create(data)
        return newuser
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 