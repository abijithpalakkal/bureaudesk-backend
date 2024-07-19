import express,{Application,Request,Response,NextFunction}from "express"
import cookieParser from "cookie-parser"
import { userRouter } from "./infrastructure/routes/userRoutes"
import { dependencies } from "./config/dependencies"
import dotenv from "dotenv";

dotenv.config();


const app: Application=express()
const port: number=3002

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

app.use("/",userRouter(dependencies))

app.use((
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    console.log(err.message,"👌🚀👌😁")
      const errorresponse = {
        errorResponse:{message: err?.message || 'Something went wrong' }
    };
     res.json(errorresponse);
  })

app.listen(process.env.port,()=>{
    console.log("system running",process.env.port)
})
export default app
