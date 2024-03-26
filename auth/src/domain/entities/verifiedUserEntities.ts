import { ObjectId } from "mongoose";

export interface verifiedUserEntities {
  email:{
    type:string
  },
  password:{
    type:string
  },
  Authorization:{
    type:string
  }
}