import { user } from "../models/userSchema";

export const getEmployeesRepo=async(data:any)=>{
   try{
       const newuser= await user.find(data)
       return newuser
   }catch(error:any){
     throw new Error(error?.message)
   }
}
