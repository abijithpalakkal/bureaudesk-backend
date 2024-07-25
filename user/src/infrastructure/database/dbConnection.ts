import mongoose, { Error } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI || "".trim())
        console.log(`🍃🍃🍃🍃🍃🍃 Database connected with MongoDB 🍃🍃🍃🍃🍃🍃`,process.env.MONGODB_URI)
    }catch(error:any)
    {
        console.log(error)
    };
}
