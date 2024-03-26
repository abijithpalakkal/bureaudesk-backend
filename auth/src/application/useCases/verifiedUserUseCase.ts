

export const verifiedUserUseCase=(dependencies:any)=>{
    console.log("heeeeeeeeeeeeeeeeee")
    const {repositories:{verifiedUserRepo}}=dependencies
    return{
        execute:async(data:any)=>{
            try{
                return await verifiedUserRepo(data)
            }catch(err:any){
                throw new Error(err?.message)
            }
        }
    }
}