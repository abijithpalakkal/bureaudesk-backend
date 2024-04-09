import { UserEntities } from "../../domain/entities/userEntities";

export const updateUserUseCase = (dependencies:any)=>{
   const {repositories:{updateUserRepo}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await updateUserRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}