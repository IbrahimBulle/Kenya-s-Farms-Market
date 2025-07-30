import mongoose from "mongoose";
const connectToDB=async()=>{
  const url="mongodb+srv://abdiwaliibrahimbulle:vkh8uhSuXZq8E7TV@cluster0.x4owzem.mongodb.net/"

  console.log(url)
  try {
     mongoose.connect(url)
     .then(()=>console.log('connected to db successfully'))
  } catch (error) {
    console.log(error)
  }
 
}

export default connectToDB