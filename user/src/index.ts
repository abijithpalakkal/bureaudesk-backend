import server from "./server"
import dbConnection from "./infrastructure/database/dbConnection"
import { runConsumer } from "./infrastructure/kafka/consumer";
import { kafka } from "./infrastructure/kafka";
import { stopConsumer } from "./infrastructure/kafka/consumer";

(async () => {
    
    try {
        server;
        await dbConnection().catch((error: any) => {
            console.log(error?.message)
        });
        await runConsumer().then(() => {
            console.log("kafka running")
        }).catch(() => {
            console.log("error in kafka consumer")
            process.exit()
        })

    } catch (error: any) {
        console.log(error?.message)
    } finally {
        process.on("SIGINT", async() => {
            console.log("\n\nServer is shutting down...");
            await stopConsumer()
            process.exit()
        })
    }
})();