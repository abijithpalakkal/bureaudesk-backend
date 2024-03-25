import server from "./server"
import dbConnection from "./infrastructure/database/dbConnection"

(async()=>{
    console.log("i am here with server")
    try{
        server;
        await dbConnection().catch((error:any)=>{
             console.log(error?.message)
        });
    
    }catch(error:any){
       console.log(error?.message)
    }
})();