export const updateProjectUseCase = (dependencies:any)=>{
    const {repositories:{updateProjectRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await updateProjectRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }