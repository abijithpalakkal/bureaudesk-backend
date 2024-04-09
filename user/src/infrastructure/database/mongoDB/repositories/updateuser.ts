import { user } from "../models/userSchema";

export const updateUserRepo=async(data:any)=>{
   try{
    console.log(data,"🚀👌❤️")
       const newuser= await user.findByIdAndUpdate(data._id,data.obj)
       return newuser
   }catch(error:any){
     throw new Error(error?.message)
   }
}
