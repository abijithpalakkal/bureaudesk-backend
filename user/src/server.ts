import express,{Application,Request,NextFunction, Response}from "express"
import cookieParser from "cookie-parser"
import { userRouter } from "./infrastructure/routes/userRoutes"
import { dependencies } from "./config/dependencies"
import dotenv from "dotenv";

dotenv.config();


const app: Application=express()
const port: number=3001

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

// app.use("/user",userRouter(dependencies))
app.use("/",userRouter(dependencies))

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err.message);
      const errorResponse = {
        errorResponse:{message: err?.message || 'Something went wrong' }
    };
     res.json(errorResponse);
  })

app.listen(process.env.port,()=>{
    console.log("system .running",process.env.port)
})
export default app
