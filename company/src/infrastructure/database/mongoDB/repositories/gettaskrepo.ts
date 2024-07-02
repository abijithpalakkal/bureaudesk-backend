import {taskModel} from "../models/task";

export const getTaskRepo=async(data:any)=>{
   try{
    console.log(data)
       const newTask= await taskModel.find(data).populate("projectId")
       
       const reversedTask = newTask.reverse();

       return reversedTask;
   }catch(error:any){
     throw new Error(error?.message)
   }
}
