
import Image from "next/image"


const page = ({imageurl}) => {
  return (
    <div className="bg-gray-200 w-50 h-47 rounded-2xl  m-3 flex flex-col gap-2 mb-9" >
      <Image src={imageurl} alt="image"  width={200} height={300} className="rounded-2xl"></Image>
    </div>
  )
}

export default page