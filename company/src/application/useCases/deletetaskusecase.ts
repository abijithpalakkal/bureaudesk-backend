export const deleteTaskUseCase = (dependencies:any)=>{
    const {repositories:{deleteTaskRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await deleteTaskRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }