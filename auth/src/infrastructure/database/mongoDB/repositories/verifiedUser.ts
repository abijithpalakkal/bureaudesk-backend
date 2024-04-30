import { verifiedUser } from "../models/verifieduserschema";
import { verifiedUserEntities } from "../../../../domain/entities/verifiedUserEntities";

export const verifiedUserRepo=async(data:verifiedUserEntities)=>{
    try{
        
        const data1=await verifiedUser.create(data);
        return data1
        
    }catch(err:any){
        throw new Error(err?.message)
    }
    
}