import {projectModel} from "../models/projects";

export const getProjectRepo=async(data:any)=>{
   try{
    console.log(data)
    let newEvent;
       newEvent= await projectModel.find({companyId:data})
       if(newEvent.length==0){
          newEvent= await projectModel.find({_id:data})
       }
       return newEvent
   }catch(error:any){
     throw new Error(error?.message)
   }
}
