import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  projectName: { type: String },
  projectDescription: { type: String },
  priority: { type: String },
  deadLine: { type: String },
  attachments:{type:[String]}
}, {
  timestamps: true
});

export const projectModel = model("Project", projectSchema);

