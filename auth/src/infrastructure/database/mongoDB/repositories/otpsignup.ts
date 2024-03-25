 import { otp } from "../models/userSchema";

 export const otpsignup=async(data:any)=>{
    try{
        const newuser= await otp.create(data)
        return newuser
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 