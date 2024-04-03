import server from "./server"
import dbConnection from "./infrastructure/database/dbConnection"
import { runConsumer } from "./infrastructure/kafka/consumer";
import { stopConsumer } from "./infrastructure/kafka/consumer";

(async()=>{
    console.log("i am here with server")
    try{
        server;
        await dbConnection().catch((error:any)=>{
             console.log(error?.message)
        });
        await runConsumer().then(() => {
            console.log("kafka running")
        }).catch(() => {
            console.log("error in kafka consumer")
        })
    
    }catch(error:any){
       console.log(error?.message)
    }finally {
     
        process.on("SIGINT", async() => {
            console.log("\n\nServer is shutting down...");
            
        })
    }
})();