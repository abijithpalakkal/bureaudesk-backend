import express,{Application,Request,NextFunction, Response}from "express"
import cookieParser from "cookie-parser"
import { userRouter } from "./infrastructure/routes/userRoutes"
import { dependencies } from "./config/dependencies"
require('dotenv').config();

const app: Application=express()
const port: number=3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

app.use("/",(req,res,next)=>{console.log(req.body),next()},userRouter(dependencies))

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
    console.log(err.message,"👌🚀👌😁")
      const errorresponse = {
        errorResponse:{message: err?.message || 'Something went wrong' }
    };
     res.json(errorresponse);
  })


app.listen(port,()=>{
    console.log("system running")
})
export default app
