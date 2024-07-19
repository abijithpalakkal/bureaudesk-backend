import mongoose, { Error } from "mongoose";

export default async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI || "".trim())
        console.log(`🍃🍃🍃🍃🍃🍃 Database connected with MongoDB 🍃🍃🍃🍃🍃🍃`)
    }catch(error:any)
    {
        throw new Error(error?.message)
    };
}