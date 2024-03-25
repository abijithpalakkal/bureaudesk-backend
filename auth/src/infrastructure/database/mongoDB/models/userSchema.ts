import { Schema, model } from "mongoose";
import { otpEntities } from "../../../../domain/entities/otpEntities";

const otpSchema = new Schema({
    email: {
        type: String
    },
    otp: {
        type: Number
    },
    createdAt: {
        type: Date,
        expires: 120,
        default: Date.now 
    }
});

export const otp = model<otpEntities>("otp", otpSchema);
