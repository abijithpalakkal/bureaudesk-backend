import { Schema, model } from "mongoose";


const commentSchema = new Schema({
  status: { type: String, },
  comments: { type: String, },
  attachments: { type: String, }
});


const taskSchema = new Schema({
  taskName: { type: String },
  companyid: { type: Schema.Types.ObjectId },
  priority: { type: String },
  deadLine: { type: String },
  estimate: { type: String },
  taskDescription: { type: String },
  Departmentid: { type: Schema.Types.ObjectId },
  projectId: { type: Schema.Types.ObjectId, ref: "Project" },
  files: [{ type: String }],
  comments: [commentSchema], // Fixed typo here
  assignedTo: { type: Schema.Types.ObjectId },
  assignedBy: { type: Schema.Types.ObjectId },
  lateSubmission: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['Assigned', 'Started', 'in_Progress', 'Done', "Approved", "Rejected"],
    default: 'Assigned'
  }
},
  {
    timestamps: true
  });

export const taskModel = model("task", taskSchema); 
