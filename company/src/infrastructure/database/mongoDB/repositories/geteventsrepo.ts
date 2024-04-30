import {EventModel } from "../models/events";

export const getEventRepo=async(data:any)=>{
   try{
    console.log(data)
       const newEvent= await EventModel.find(data)
       return newEvent
   }catch(error:any){
     throw new Error(error?.message)
   }
}
