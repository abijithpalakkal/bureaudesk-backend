import {taskModel } from "../models/task";

export const addTaskRepo=async(data:any)=>{
   try{
       const newTask= await taskModel.create(data)
       return newTask
   }catch(error:any){
     throw new Error(error?.message)
   }
}
