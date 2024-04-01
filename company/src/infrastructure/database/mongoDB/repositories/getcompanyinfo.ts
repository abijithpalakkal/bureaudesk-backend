import { company } from "../models/comapny";

export const getcompanyinfoRepo=async(data:any)=>{
   try{
       const companydata= await company.findOne({_id:data})
       return companydata
   }catch(error:any){
     throw new Error(error?.message)
   }
}
