import { UserEntities } from "../../domain/entities/userEntities";

export const createUserUseCase = (dependencies:any)=>{
   const {repositories:{createUserRepo}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await createUserRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}