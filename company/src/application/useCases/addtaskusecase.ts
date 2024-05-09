export const addTaskUseCase = (dependencies:any)=>{
    const {repositories:{addTaskRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await addTaskRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }