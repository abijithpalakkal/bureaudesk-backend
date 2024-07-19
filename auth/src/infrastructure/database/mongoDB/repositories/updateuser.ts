import { otp } from "../models/userSchema";
import { verifiedUser } from "../models/verifieduserschema";
import bcrypt from 'bcrypt';
import { hashPassword } from "../../../../utils/bcrypthash";




export const updateUser=async(data:any)=>{
   try{
    const hahed=await hashPassword(data.newPassword)


       const newuser= await verifiedUser.findOneAndUpdate({email:data.email},{password:hahed})
       return newuser
   }catch(error:any){
     throw new Error(error?.message)
   }
}
