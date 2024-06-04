
export const addSubmittedTaskUseCase = (dependencies:any)=>{
    const {repositories:{submitTaskRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await submitTaskRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }