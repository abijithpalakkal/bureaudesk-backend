import { ObjectId } from "mongoose";

export interface getUserEntities {
  email?:{
    type:string
  },
  password?:{
    type:string
  }
}