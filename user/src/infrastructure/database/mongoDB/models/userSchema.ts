import { Schema, model } from "mongoose";
import { UserEntities } from "../../../../domain/entities/userEntities";

const userSchema=new Schema({
  Description: { type: String },
  Name: { type: String },
  Dob: { type: Date },
  Company: { type: Schema.Types.ObjectId },
  Contactno: { type: String },
  Location: { type: String },
  Position: { type: String },
  Createdby: { type: Schema.Types.ObjectId },
  email: { type: String,unique:true},
  Authorization: { type: String },
  Department: { type: Schema.Types.ObjectId },
  Departmentid: { type: Schema.Types.ObjectId },
  Admin: { type: Boolean },
  otp:{type:Number}
},{
    timestamps: true
})

export const user= model<UserEntities>("users",userSchema)