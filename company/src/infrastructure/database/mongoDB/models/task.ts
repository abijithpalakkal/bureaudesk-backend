import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  taskName: { type: String },
  companyid:{type:Schema.Types.ObjectId},
  priority: { type: String },
  deadLine: { type: String },
  estimate: { type: String }, 
  taskDescription: { type: String },
  Departmentid:{type:Schema.Types.ObjectId},
  files: [{ type: String }],
  assignedTo:{type:Schema.Types.ObjectId},
  assignedBy:{type:Schema.Types.ObjectId}
},
 {
  timestamps: true
});

export const taskModel = model("task", taskSchema); 
