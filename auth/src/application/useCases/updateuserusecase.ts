import { otpEntities } from "../../domain/entities/otpEntities";
import { getUserEntities } from "../../domain/entities/getuserentities";

export const updateUserUseCase = (dependencies:any)=>{
   const {repositories:{updateUser}}=dependencies;
   return {
    execute:async(data:getUserEntities)=>{
        try{
            return await updateUser(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}