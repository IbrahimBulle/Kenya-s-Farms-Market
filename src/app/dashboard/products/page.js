
import Card from '../../../components/ui/Card'
import { v2 as cloudinary } from 'cloudinary'
const page = async() => {
  cloudinary.config({
    cloud_name:"ddtavzfhj",
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
  })
   const { resources } = await cloudinary.search
  .expression('folder:"*"') 
  .max_results(30) 
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
// import { cookies } from 'next/headers'
// import { v2 as cloudinary } from 'cloudinary'
// import OrderCard from '@/components/ui/OrderCard'

// const page = async () => {
//   const email = cookies().get('email')?.value
//   console.log('Email:', email)

//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
//   })

//   const { resources } = await cloudinary.search
//     .expression(`folder:"*"`) 
//     .max_results(30) 
//     .execute()

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {resources.map((img) => {
//         const folderName = img.public_id.split('/')[0]

//         return (
//           <OrderCard
//             key={img.public_id}
//             imageurl={img.secure_url}
//             public_id={img.public_id}
//             email={folderName} 
//           />
//         )
//       })}
//     </div>
//   )
// }

// export default page
