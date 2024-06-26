import { Module, forwardRef } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification,NotificationSchema } from './schema/notificationModal';
import { KafkaModule } from 'src/kafka/kafka.module';


@Module({
    imports:[MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),forwardRef(() => KafkaModule)],
  providers: [NotificationService],
  controllers: [NotificationController]
})
export class NotificationModule {}

