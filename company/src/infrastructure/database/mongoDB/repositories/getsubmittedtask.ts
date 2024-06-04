import { submittedTask } from "../models/submittedtask"

export const getSubmittedTaskRepo=async(data:any)=>{
   try{
    console.log(data)
       const newEvent= await submittedTask.find(data)
       return newEvent
   }catch(error:any){
     throw new Error(error?.message)
   }
}
