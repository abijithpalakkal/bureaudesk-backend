export const getcompanyinfoUseCase = (dependencies:any)=>{
    const {repositories:{getcompanyinfoRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await getcompanyinfoRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }