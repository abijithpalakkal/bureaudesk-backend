import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  projectName: { type: String },
  projectDescription: { type: String },
  priority: { type: String },
  deadLine: { type: String },
  teamId:{   type:Schema.Types.ObjectId},
  completed:{type: Boolean ,default:false },
  attachments:{type:[String]},
  companyId:{type:String }
}, {
  timestamps: true
});

export const projectModel = model("Project", projectSchema);

