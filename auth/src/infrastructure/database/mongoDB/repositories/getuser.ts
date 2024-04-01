import { verifiedUser } from "../models/verifieduserschema"
import { getUserEntities } from "../../../../domain/entities/getuserentities"


export const getUserRepo=async(data:getUserEntities)=>{
    try{
        const user= await verifiedUser.findOne(data)
        return user
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 