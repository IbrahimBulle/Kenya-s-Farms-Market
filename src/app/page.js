import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const page = async() => {
  const cookiestore= await cookies()
  const role =cookiestore.get('role')?.value
  if(!role){
    redirect('/auth/login')
  }else if(role==='Farmer'){
    redirect('/dashboard')
  }else{
     redirect('/buyer')
  }
  return (
    <h1>page</h1>
  )
}

export default page