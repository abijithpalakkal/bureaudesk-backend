import { ObjectId } from "mongoose";

export interface otpEntities {
  email:{
    type:string
  },
  otp:{
    type:number
  }
}