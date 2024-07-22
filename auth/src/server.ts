import express,{Application, NextFunction, Request, Response}from "express"
import cookieParser from "cookie-parser"
import { userRouter } from "./infrastructure/routes/userRoutes"
import { dependencies } from "./config/dependencies"
import dotenv from "dotenv";
dotenv.config();

const app: Application=express()
const port: number=3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

app.use("/",(req,res,next)=>{console.log(req.body),next()},userRouter(dependencies))

app.use((
    err: any,
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
   
      const errorresponse = {
        errorResponse:{message: err?.message || 'Something went wrong' }
    };
     res.json(errorresponse);
  })


app.listen(process.env.port,()=>{
    console.log("system running",process.env.port)
})
export default app
