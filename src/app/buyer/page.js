// pages/[your-page].js or [your-page].tsx
import { cookies } from 'next/headers'
import { v2 as cloudinary } from 'cloudinary'
import OrderCard from '@/components/ui/OrderCard'

const page = async () => {
  const cookieStore = await cookies() // 👈 this line is important in Next 15
  const email = cookieStore.get('email')?.value

  console.log('Email:', email)

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  const { resources } = await cloudinary.search
    .expression(`folder:"*"`) 
    .max_results(30) 
    .execute()

 return (
  <div className="flex flex-wrap  gap-4">
    {resources.map((img) => {
      // console.log(img.public_id);
      return (
         <OrderCard
          key={img.public_id}
          imageurl={img.secure_url}
          product_id={`${img.public_id}`}
        />
       
      )
    })}
  </div>
)
}

export default page
