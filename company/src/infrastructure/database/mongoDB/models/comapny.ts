import { Schema, model } from "mongoose";


const companySchema=new Schema({
  Name: { type: String },
  Bussinesstype: { type: String },
  Description: { type: String},
  Companylogo: { type: String },
},{
    timestamps: true
})

export const company= model("company",companySchema)