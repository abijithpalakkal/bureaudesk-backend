export const updateTaskUseCase = (dependencies:any)=>{
    const {repositories:{updateTaskRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await updateTaskRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }