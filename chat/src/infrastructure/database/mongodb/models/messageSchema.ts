import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  readBy: [{ type: Schema.Types.ObjectId}],
},
{
  timestamps: true,
});

export const Message = model('message', MessageSchema);