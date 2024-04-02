export const getDepartmentUseCase = (dependencies:any)=>{
    const {repositories:{getDepartmentRepo}}=dependencies;
    return {
     execute:async(data:any)=>{
         try{
             return await getDepartmentRepo(data);
         }catch(error:any){
             throw new Error(error?.message)
         }
     }
    }
 }