import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
import { NextResponse } from 'next/server'
import connectToDB from '../../../../database/mongodb'
import Product from '../../model/add-products'
dotenv.config()
export const POST = async (req) => {
  const data = await req.formData()

  const name = data.get('name')
  const category = data.get('category')
  const quantity = data.get('quantity')
  const price = data.get('price')
  const description = data.get('description')
  const email = data.get('email')
  const image = data.get('image')
   console.log(email)
  let imageUrl = ''
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

  if (image && image.name) {
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
   imageUrl = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: email },
        (err, result) => {
          if (err || !result) {
            reject(err)
          } else {
            resolve(result.secure_url) 
          }
        }
      )
      uploadStream.end(buffer)
    })
  }
  await connectToDB()
  await Product.create({ name, category,quantity, price, description, email , image: imageUrl })

  return NextResponse.json({ success: true,message:'product added successfully' })
}
