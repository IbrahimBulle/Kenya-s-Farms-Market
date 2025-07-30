// app/api/delete-image/route.js
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function DELETE(req) {
  try {
    const { public_id } = await req.json()

    const result = await cloudinary.uploader.destroy(public_id)

    if (result.result !== 'ok') {
      return new Response('Failed to delete image', { status: 500 })
    }

    return new Response('Deleted', { status: 200 })
  } catch (error) {
    console.error('Cloudinary delete error:', error)
    return new Response('Server Error', { status: 500 })
  }
}
