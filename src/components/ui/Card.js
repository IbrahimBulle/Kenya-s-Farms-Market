
import Image from "next/image"


const page = ({imageurl}) => {
  return (
    <div className=" w-50  rounded-2xl  m-3 flex flex-col gap-2 mb-9 object-cover" >
      <Image src={imageurl} alt="image"  width={200} height={300} className="rounded-2xl object-cover"></Image>
    </div>
  )
}

export default page