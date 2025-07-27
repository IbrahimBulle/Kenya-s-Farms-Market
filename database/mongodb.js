import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectToDB=async()=>{
  const url=process.env.MONGODB_URI
  try {
     mongoose.connect(url)
     .then(()=>console.log('connected to db successfully'))
  } catch (error) {
    console.log(error)
  }
 
}

export default connectToDB