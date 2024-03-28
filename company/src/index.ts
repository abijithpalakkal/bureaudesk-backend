import server from "./server"
import dbConnection from "./infrastructure/database/dbConnection"
import { runConsumer } from "./infrastructure/kafka/consumer";
import { kafka } from "./infrastructure/kafka";
import { stopConsumer } from "./infrastructure/kafka/consumer";

(async () => {
    server;
     await dbConnection().catch((error: any) => {
            console.log(error?.message)
        });
})();