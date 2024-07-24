import express,{Application,Request,NextFunction, Response}from "express"
import cookieParser from "cookie-parser"
import http from "http";
import connectSocketIo from "./infrastructure/socket/connection"
 import { userRouter } from "./infrastructure/routes/chatRouter"
 import { dependencies } from "./config/dependencies"
 import dotenv from 'dotenv';
 dotenv.config();

const app: Application=express()
const port: number= 3005
 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

app.use("/chat",(req,res,next)=>{console.log(req.body),next()},userRouter(dependencies))
const server = http.createServer(app);

connectSocketIo(server);

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
    console.log(err.message,"👌 l 🚀👌😁")
      const errorresponse = {
        errorResponse:{message: err?.message || 'Something went wrong' }
    };
     res.json(errorresponse);
  })


server.listen(process.env.port,()=>{
    console.log("system running",process.env.port)
}) 
export default app
