import { Document, Types } from 'mongoose';

interface iEvent extends Document {
    _id:string,
  eventName: string;
  eventCategory: string;
  priority: string;
  eventDate: string;
  eventEndDate: string;
  eventTime: string;
  eventEndTime: string;
  eventDescription: string;
  companyid: Types.ObjectId;
}

export default iEvent;
