import express,{Application,Request,response,NextFunction}from "express"
import cookieParser from "cookie-parser"
import { userRouter } from "./infrastructure/routes/userRoutes"
import { dependencies } from "./config/dependencies"


const app: Application=express()
const port: number=3002

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());  

app.use("/",userRouter(dependencies))
app.listen(port,()=>{
    console.log("system running")
})
export default app