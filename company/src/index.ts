import server from "./server"
import dbConnection from "./infrastructure/database/dbConnection"

(async () => {
    server;
     await dbConnection().catch((error: any) => {
            console.log(error?.message)
        });
})();