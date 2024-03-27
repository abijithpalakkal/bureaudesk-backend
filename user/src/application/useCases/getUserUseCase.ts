import { UserEntities } from "../../domain/entities/userEntities";

export const getUserUseCase = (dependencies:any)=>{
   const {repositories:{getUserRepo}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await getUserRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}