
import Card from '../../../components/ui/Card'
import { v2 as cloudinary } from 'cloudinary'
const page = async() => {
  cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
  })
   const { resources } = await cloudinary.search
  .expression('folder:"products"') 
  .max_results(30) // Optional: limit the number of results per call
  .execute();
  
  return (
    <div className='flex flex-wrap'>
      {resources.map((img)=>{
       return <Card key={img.secure_url} imageurl={img.secure_url} />
      })}
    </div>
  )
}

export default page