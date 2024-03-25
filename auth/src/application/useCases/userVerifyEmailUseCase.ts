

export const verifyemailwithotp=(dependencies:any)=>{
    const{repositories:{verifyotpsignup}}=dependencies
    return {
        execute:async(data:any)=>{
            try{
                return await verifyotpsignup(data)
            }catch(error:any){
                throw new Error(error?.message)
            }
        }
    }
}