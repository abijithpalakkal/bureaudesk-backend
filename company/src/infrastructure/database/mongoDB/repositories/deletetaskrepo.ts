import {taskModel } from "../models/task"

export const deleteTaskRepo=async(data:any)=>{
   try{
  
       const taskData= await taskModel.findByIdAndDelete(data)
       return taskData
   }catch(error:any){
     throw new Error(error?.message)
   }
}
