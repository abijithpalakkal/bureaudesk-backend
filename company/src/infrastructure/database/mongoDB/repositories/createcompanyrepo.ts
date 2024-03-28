 import { company } from "../models/comapny";

 export const createCompanyRepo=async(data:any)=>{
    try{
        const newcompany= await company.create(data)
        return newcompany
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 