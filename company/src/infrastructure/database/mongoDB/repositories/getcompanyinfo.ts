import { company } from "../models/comapny";

export const getcompanyinfoRepo=async(data:any)=>{
   try{
    let companydata;
    if(data==null){
      companydata=await company.find()
    }else{
    companydata= await company.findOne({_id:data})
    }
    console.log(companydata)
       return companydata
   }catch(error:any){
     throw new Error(error?.message)
   }
}
