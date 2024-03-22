import { UserEntities } from "../../domain/entities/userEntities";

export const userSignupUseCase = (dependencies:any)=>{
   const {repositories:{signup}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await signup(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}