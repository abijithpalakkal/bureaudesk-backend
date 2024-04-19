import { Schema, model } from "mongoose";
import { UserEntities } from "../../../../domain/entities/userEntities";

const userSchema=new Schema({
  Description: { type: String },
  Name: { type: String },
  Dob: { type: Date },
  companyid: { type: Schema.Types.ObjectId },
  Contactno: { type: String },
  profileImage:{type:String},
  age:{type:Number},
  Location: { type: String },
  position: { type: String },
  Createdby: { type: Schema.Types.ObjectId },
  password:{type: String},
  email: { 
    type: String,
    unique:true
  },
  Authorization: { type: String },
  Department: { type: Schema.Types.ObjectId },
  Departmentid: { type: Schema.Types.ObjectId },
  Admin: { type: Boolean },
},{
    timestamps: true
})

export const user= model<UserEntities>("users",userSchema)