import { Module, forwardRef } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaController } from './kafka.controller';
import { NotificationModule } from 'src/notification/notification.module';
import { NotificationService } from 'src/notification/notification.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from 'src/notification/schema/notificationModal';

@Module({
  imports:[MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }])],
  providers: [KafkaService,NotificationService],
  controllers: [KafkaController]
})
export class KafkaModule {}
