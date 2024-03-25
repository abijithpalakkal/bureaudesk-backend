import { otp } from "../models/userSchema";

 export const verifyotpsignup=async(data:any)=>{
    try{
        const checkuser= await otp.findOne({email:data})
        return checkuser
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 