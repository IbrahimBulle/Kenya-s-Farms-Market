
import { cookies } from 'next/headers'
import Card from '../../../components/ui/Card'
import { v2 as cloudinary } from 'cloudinary'
import CardWithDelete from '@/components/ui/CardWithDelete'

const page = async() => {
     
    const cookie = await cookies()
    const email =cookie.get('email')?.value
    console.log(email);
  cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
  })
   const { resources } = await cloudinary.search
  .expression(`folder:${email}`) 
  .max_results(30) // Optional: limit the number of results per call
  .execute();
  return (
    <div className="flex flex-wrap gap-4">
      {resources.map((img) => (
        <CardWithDelete
          key={img.public_id}
          imageurl={img.secure_url}
          public_id={img.public_id}
        />
      ))}
    </div>
  )
}

export default page