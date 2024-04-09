export const getTeamUseCase = (dependencies:any)=>{
    const {repositories:{getTeamRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await getTeamRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }