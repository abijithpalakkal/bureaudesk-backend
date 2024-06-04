import { idText } from "typescript";
import { submittedTask } from "../models/submittedtask"

export const updateSubmitedTaskRepo=async(data:any)=>{
    const {id,...updatedobj}=data
   try{
       const newTask= await submittedTask.findByIdAndUpdate(id,updatedobj)
       return newTask
   }catch(error:any){
     throw new Error(error?.message)
   }
}
