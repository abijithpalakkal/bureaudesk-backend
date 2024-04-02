import { department } from "../models/department"


export const createDepartmentRepo=async(data:any)=>{
    try{
        const newdpt= await department.create(data)
        return newdpt
    }catch(error:any){
      throw new Error(error?.message)
    }
 }
 