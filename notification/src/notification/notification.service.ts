import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Notification, NotificationDocument } from './schema/notificationModal';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { promises } from 'dns';
import { CreateNotificationDto } from 'src/dto/notification.dto';



@Injectable()
export class NotificationService {
    constructor(@InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>) { }

    good(): string {
        return "good work"
    }

    async createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
        try{
            const createdNotifications = new this.notificationModel(createNotificationDto);
            return createdNotifications.save();
        }catch(e){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Could not create notification',
                message: e.message,
            }, HttpStatus.BAD_REQUEST)
        }
      }

    async findAll(id:string): Promise<Notification[]> {
        return this.notificationModel.find({userId:id}).exec();
    }

    
}

