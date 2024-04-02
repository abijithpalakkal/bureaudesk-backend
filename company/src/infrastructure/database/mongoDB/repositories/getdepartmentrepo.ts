import { department } from "../models/department"


export const getDepartmentRepo=async(data:any)=>{
    try{
        const newdpt= await department.find(data)
        return newdpt
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 