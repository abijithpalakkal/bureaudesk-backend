
export const createCompanyUseCase = (dependencies:any)=>{
   const {repositories:{createCompanyRepo}}=dependencies;
   return {
    execute:async(data:any)=>{
        try{
            return await createCompanyRepo(data);
        }catch(error:any){
            throw new Error(error?.message)
        }
    }
   }
}