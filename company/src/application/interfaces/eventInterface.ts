import { Document, Types } from 'mongoose';

interface iEvent extends Document {
    _id:string,
  eventName: string;
  eventCategory: string;
  priority: string;
  eventDate: string;
  eventTime: string;
  eventDescription: string;
  companyid: Types.ObjectId;
}

export default iEvent;
