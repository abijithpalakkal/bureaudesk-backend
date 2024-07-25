// src/kafka/kafka.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class KafkaService implements OnModuleInit {
    private readonly kafka = new Kafka({
        brokers: ['kafka:9092'], // Replace with your Kafka broker address
    });

    private readonly consumer: Consumer = this.kafka.consumer({ groupId: 'my-consumer-group' });
    constructor(private readonly notificationService: NotificationService) { }

    async onModuleInit() {
        await this.consumer.connect();
        await this.consumer.subscribe({ topic: 'to-notification', fromBeginning: true }); // Replace with your topic

        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
                const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
                console.log(`- ${prefix} ${message.key}#${message.value}`);
                const jsonData= JSON.parse(String(message.value))
                console.log(jsonData,"jasonData")
                await this.notificationService.createNotification(jsonData);
            },
        });
    }
}
