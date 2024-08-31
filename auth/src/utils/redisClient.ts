// import { Redis,RedisOptions } from "ioredis";


// const redisHost = process.env.REDIS_HOST || "redis-stack";
// const redisPort = parseInt(process.env.REDIS_PORT || "6379", 10);


// const redisConfig: RedisOptions = {
//   host: redisHost,
//   port: redisPort,
// };

// export const Client = new Redis(redisConfig);

// Client.on("connect",() => {
    
//     console.log("connected to redis");

// })

//---------------------------------------------------------------

import { Redis } from "ioredis";

// Set the Redis URL provided by Render.
const redisURL = process.env.REDIS_URL || "redis://red-cr9a240gph6c73cs4rkg:6379";

// Create a Redis client using the URL.
export const Client = new Redis(redisURL);

// Event listener to confirm connection.
Client.on("connect", () => {
  console.log("Connected to Redis");
});

// Event listener to handle errors.
Client.on("error", (err) => {
  console.error("Redis connection error:", err);
});
