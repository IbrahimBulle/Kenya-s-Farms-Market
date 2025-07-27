import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    category:String,
    quantity:Number,
    price:Number,
    description:String,
    image:String
})

const addproducts= mongoose.models.addproducts || mongoose.model('addproducts',userSchema)

export default addproducts;