import { idText } from "typescript";
import {EventModel } from "../models/events";

export const updateEventRepo=async(data:any)=>{
    console.log(data,123)
    const {id,...updatedobj}=data
   try{
       const newEvent= await EventModel.findByIdAndUpdate(id,updatedobj)
       return newEvent
   }catch(error:any){
     throw new Error(error?.message)
   }
}
