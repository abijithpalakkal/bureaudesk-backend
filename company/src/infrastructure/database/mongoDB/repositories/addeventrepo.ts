import {EventModel } from "../models/events";

export const addEventRepo=async(data:any)=>{
   try{
       const newEvent= await EventModel.create(data)
       return newEvent
   }catch(error:any){
     throw new Error(error?.message)
   }
}
