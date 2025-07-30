'use client'
export const dynamic = 'force-dynamic';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Navbar = () => {
    const router= useRouter()
  useEffect(()=>{
     const cookie= document.cookie
     const match=cookie.match(/role=([^;]+)/)
     const role=match?.[1] || null
     console.log(role)
   if(!role){
    router.push('/auth/login')
    
  }else if(role!=='Farmer'){
    router.push('/buyer')
  }
  },[])
 
  
  const handleLogout=()=>{
  document.cookie='role=; Max-Age=0; path=/;'
  router.push('/auth/login')
}
  return (
   <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
       <Button variant="ghost"> <Link href={ 'buyer/vieworders'}>View Orders</Link> </Button>
        <Button onClick={handleLogout} variant="destructive">Logout</Button>
      </div>
    </nav>
  )
}

export default Navbar