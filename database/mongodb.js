import mongoose from "mongoose";

const connectToDB=async()=>{
  const url="mongodb+srv://abdiwaliibrahimbulle:Kuvcv4QLqcgGLb6Y@cluster0.x4owzem.mongodb.net/";
  try {
     mongoose.connect(url)
     .then(()=>console.log('connected to db successfully'))
  } catch (error) {
    console.log(error)
  }
 
}

export default connectToDB