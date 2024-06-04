import { Schema, model } from "mongoose";


const submittedtaskSchema=new Schema({
 taskId:{
    type:Schema.Types.ObjectId
 },
 taskNote:{
    type:String
 },
 taskFile:{
    type:String
 },
 status:{
    type:String,
    enum:["Approved,Rejected"]
 }
}

)

export const submittedTask= model("submittedTask",submittedtaskSchema)