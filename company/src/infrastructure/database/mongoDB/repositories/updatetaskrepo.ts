import { idText } from "typescript";
import {taskModel} from "../models/task";

export const updateTaskRepo=async(data:any)=>{
    const {id,...updatedobj}=data
   try{
       const newTask= await taskModel.findByIdAndUpdate(id,updatedobj)
       return newTask
   }catch(error:any){
     throw new Error(error?.message)
   }
}
