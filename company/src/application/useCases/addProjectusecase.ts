export const addProjectUseCase = (dependencies:any)=>{
    const {repositories:{addProjectRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await addProjectRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }