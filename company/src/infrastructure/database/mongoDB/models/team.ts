import { Schema, model } from "mongoose";


const teamSchema = new Schema({
    name: { type: String },
    members: [ {type: Schema.Types.ObjectId }],
    companyId:{type: Schema.Types.ObjectId },
    description: { type: String },
    teamlead:{type: Schema.Types.ObjectId},
    departmentid:{type: Schema.Types.ObjectId}
}, {
    timestamps: true
})

export const team = model("team", teamSchema )