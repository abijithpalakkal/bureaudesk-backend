import { otp } from "../models/userSchema";

export const updateOtpRepo=async(data:any)=>{
   try{
       const newuser= await otp.deleteOne({email:data.email})
       return newuser
   }catch(error:any){
     throw new Error(error?.message)
   }
}
