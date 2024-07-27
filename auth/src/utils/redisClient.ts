import { Redis,RedisOptions } from "ioredis";


const redisHost = process.env.REDIS_HOST || "redis-stack";
const redisPort = parseInt(process.env.REDIS_PORT || "6379", 10);

const redisConfig: RedisOptions = {
  host: redisHost,
  port: redisPort,
};

export const Client = new Redis(redisConfig);

Client.on("connect",() => {
    
    console.log("connected to redis");

})