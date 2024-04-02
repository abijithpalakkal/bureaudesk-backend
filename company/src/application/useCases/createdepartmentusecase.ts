export const createDepartmentUseCase = (dependencies:any)=>{
    const {repositories:{createDepartmentRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await createDepartmentRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }