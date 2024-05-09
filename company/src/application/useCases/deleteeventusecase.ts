export const deleteEventUseCase = (dependencies:any)=>{
    const {repositories:{deleteEventRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await deleteEventRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }