export const createteamUseCase = (dependencies:any)=>{
    const {repositories:{createTeamRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await createTeamRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }