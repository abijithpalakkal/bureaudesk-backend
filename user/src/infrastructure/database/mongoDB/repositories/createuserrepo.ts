import { user } from "../models/userSchema";

export const createUserRepo=async(data:any)=>{
   try{
       const newuser= await user.create(data)
       return newuser
   }catch(error:any){
     throw new Error(error?.message)
   }
}
