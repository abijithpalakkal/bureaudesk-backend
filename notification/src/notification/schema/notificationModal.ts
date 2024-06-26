// src/notifications/schemas/notification.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  notification: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
