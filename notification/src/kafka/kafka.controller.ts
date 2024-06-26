// src/kafka/kafka.controller.ts
import { Controller, Get } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Get('status')
  getStatus() {
    return 'Kafka consumer is running';
  }
}
