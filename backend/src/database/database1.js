import mongoose from 'mongoose'

export const connectDB = async () =>{
          const db =await mongoose.connect("mongodb://localhost:27017/shivanshu")
          console.log("data base is connected")
          
}