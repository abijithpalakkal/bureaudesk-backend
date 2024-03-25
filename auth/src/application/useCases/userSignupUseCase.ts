import { otpEntities } from "../../domain/entities/otpEntities";

export const otpSignupUseCase = (dependencies:any)=>{
   const {repositories:{otpsignup}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await otpsignup(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}