export const updateEventUseCase = (dependencies:any)=>{
    const {repositories:{updateEventRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await updateEventRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }