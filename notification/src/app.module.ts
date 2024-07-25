import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from './kafka/kafka.module';




@Module({
  imports: [NotificationModule, MongooseModule.forRoot(process.env.MONGODB_URI),
  ClientsModule.register([
    {
      name: 'KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['kafka:9092'], // Replace with your Kafka broker address
        },
        consumer: {
          groupId: 'my-consumer-group', // Replace with your consumer group
        },
      },
    },
  ]),
  KafkaModule,
  ], // Replace with your MongoDB connection string
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
