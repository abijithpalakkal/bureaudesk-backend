
export const addEventUseCase = (dependencies:any)=>{
    const {repositories:{addEventRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await addEventRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }