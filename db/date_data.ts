import mongoose from "mongoose"

const date_dataSchema=new mongoose.Schema({
    date: String,
    listinagArray:[Number],
    allignment:{}
})

export const dateAndData=mongoose.model("dateandData",date_dataSchema)
