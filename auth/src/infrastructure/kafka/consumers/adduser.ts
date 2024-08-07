import { verifiedUser } from "../../database/mongoDB/models/verifieduserschema"

export const addUser=async(data:any)=>{
    try{
        const data1 =await  verifiedUser.create(data)
    }catch(err:any){
        throw new Error(err?.message)
    }
}