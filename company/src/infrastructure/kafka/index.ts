import { Kafka,Producer,Consumer } from "kafkajs";

const kafka = new Kafka({
    clientId: "comapny-service",
    brokers:["kafka:9092"]
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "company-service-kafka-group"
})
