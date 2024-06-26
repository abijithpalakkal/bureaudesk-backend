import {projectModel} from "../models/projects";

export const addProjectRepo=async(data:any)=>{
   try{
       const newTask= await projectModel.create(data)
       return newTask
   }catch(error:any){
     throw new Error(error?.message)
   }
}
