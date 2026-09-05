// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import express from 'express'

dotenv.config({ //New resolve for the conflict 
    path: './env'
})

connectDB();







/*
const app = express()
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log("Error: ", error);
        throw err
    }
})()

*/