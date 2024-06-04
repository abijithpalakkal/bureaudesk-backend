export const updateSubmittedTaskUseCase = (dependencies:any)=>{
    const {repositories:{updatesubmittedtaskrepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await updatesubmittedtaskrepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }