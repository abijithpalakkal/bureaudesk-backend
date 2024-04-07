import { UserEntities } from "../../domain/entities/userEntities";

export const getEmployeesUseCase = (dependencies:any)=>{
   const {repositories:{getEmployeesRepo}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await getEmployeesRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}