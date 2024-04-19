import { otpEntities } from "../../domain/entities/otpEntities";
import { getUserEntities } from "../../domain/entities/getuserentities";

export const otpUpdateUseCase = (dependencies:any)=>{
   const {repositories:{updateOtpRepo}}=dependencies;
   return {
    execute:async(data:getUserEntities)=>{
        try{
            return await updateOtpRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}