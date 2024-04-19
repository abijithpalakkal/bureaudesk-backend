export const deleteTeamUseCase = (dependencies:any)=>{
    const {repositories:{deleteTeamRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await deleteTeamRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }