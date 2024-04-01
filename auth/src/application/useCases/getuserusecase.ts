import { otpEntities } from "../../domain/entities/otpEntities";
import { getUserEntities } from "../../domain/entities/getuserentities";

export const getUserUseCase = (dependencies:any)=>{
   const {repositories:{getUserRepo}}=dependencies;
   return {
    execute:async(data:getUserEntities)=>{
        try{
            return await getUserRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}