import { Schema, model } from "mongoose";
import { verifiedUserEntities } from "../../../../domain/entities/verifiedUserEntities";

const verifiedUserSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    Authorization:{
           type:String
    },

   
},{
    timestamps:true
});

export const verifiedUser = model<any>("verifieduser", verifiedUserSchema);