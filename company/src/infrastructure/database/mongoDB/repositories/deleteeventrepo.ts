import {EventModel } from "../models/events"

export const deleteEventRepo=async(data:any)=>{
   try{
      console.log(data)
       const eventData= await EventModel.findByIdAndDelete(data._id)
       return eventData
   }catch(error:any){
     throw new Error(error?.message)
   }
}
