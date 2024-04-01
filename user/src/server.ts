import express,{Application,Request,NextFunction, Response}from "express"
import cookieParser from "cookie-parser"
import { userRouter } from "./infrastructure/routes/userRoutes"
import { dependencies } from "./config/dependencies"


const app: Application=express()
const port: number=3001

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

app.use("/",userRouter(dependencies))

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
      const errorResponse = {
       message: err?.message || 'Something went wrong' 
    };
     res.status(500).json(errorResponse);
  })

app.listen(port,()=>{
    console.log("system running")
})
export default app
