import { Schema, model } from "mongoose";


const departmentSchema=new Schema({
  Name: { 
    type: String,
  },
  companyid:{type: Schema.Types.ObjectId},
  departmentlogo: { type: String },
},{
    timestamps: true
})

export const department= model("department",departmentSchema)