import mongoose, { Error } from "mongoose";

export default async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/bureadesk-company".trim())
        console.log(`🍃🍃🍃🍃🍃🍃 Database connected with MongoDB 🍃🍃🍃🍃🍃🍃`)
    }catch(error:any)
    {
        console.log(error)
    };
}