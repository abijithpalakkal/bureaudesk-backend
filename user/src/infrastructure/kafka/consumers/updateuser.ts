import { user } from "../../database/mongoDB/models/userSchema";

export const updateUser=async(data:any)=>{
    try{
        console.log(data,"🚀🚀🚀🚀🚀🚀🚀😂👌🤣😍😒👍")
        const data1 =await user.findByIdAndUpdate(data.userid,{companyid:data.companyid})
    }catch(err:any){
        throw new Error(err?.message)
    }
}