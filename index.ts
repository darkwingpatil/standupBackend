import express from "express"
import {createExpressMiddleware} from "@trpc/server/adapters/express"
import cors from "cors"
import{storingData} from "./router"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()
const connect=mongoose.connect("mongodb+srv://App123:Darkwing123@cluster0.56dvjei.mongodb.net/standuptool?retryWrites=true&w=majority")

const app=express()
app.use(cors({ origin: "http://localhost:5173" }))

app.use("/trpc",createExpressMiddleware({
    router:storingData,
    createContext: ({ req, res }) => {
        return {}
      },
}))


app.listen(3000,async()=>{
    connect
    console.log("server started")
})