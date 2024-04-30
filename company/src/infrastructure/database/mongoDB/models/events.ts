import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  eventName: { type: String },
  eventCategory: { type: String },
  priority: { type: String },
  eventDate: { type: String },
  eventTime: { type: String }, // Specify the type as String
  eventDescription: { type: String },
  companyid:{type: Schema.Types.ObjectId}
}, {
  timestamps: true
});

export const EventModel = model("Event", eventSchema); // Renamed model to "EventModel" for clarity
