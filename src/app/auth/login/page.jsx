'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
const router =useRouter()
  const [formDataLogin,setformdataLogin] = useState({
    email:'',
    password:''
  })
const handleChange=(e)=>{
  const {name,value}=e.target
  setformdataLogin(prev=>({
    ...prev,
    [name]:value
  }))
  console.log(formDataLogin.email)
}
  const handleSubmit =async (e)=>{
    e.preventDefault()
    for (const key in formDataLogin){
      if(formDataLogin[key]===''){
          alert(`${key} is required`)
          return;
      }
  }
    
  
    try {
      const res=await fetch('/api/login',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(formDataLogin)
      })
      const data = await res.json();
      console.log(data)
      if(!res.ok){
          console.log("failed to send data")
          alert(data.error || "Failed to signup");
        return;
      }
  
    } catch (error) {
      console.error(e);
    }
    router.push('/dashboard')
  console.log("formdata is submitted",formDataLogin)
  }
 
 
  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <div className="bg-green-700">
      <div className="bg-white flex  items-center justify-start min-h-screen rounded-tr-[200px]">
       <div className="bg-green-700 w-[50vw] h-[100vh] rounded-bl-[200px] rounded-tr-[200px]">
          <div className="bg-green-700 w-[50vw] h-[100vh] rounded-bl-[200px] rounded-tr-[200px] flex flex-col justify-center items-center px-6 text-white">
  <h1 className="text-2xl font-extrabold mb-4 text-center">🌾 KFM – Kenyan Farmers Market</h1>
  
  <div className="text-sm font-semibold space-y-2 text-left">
    <p>✅ Connects farmers with buyers across Kenya</p>
    <p>📈 Tracks daily crop prices</p>
    <p>📦 Upload and manage produce listings</p>
    <p>📍 Browse by county, quantity, and price</p>
    <p>🔔 Instant notifications on price updates</p>
  </div>

  <p className="mt-6 text-xs italic text-gray-300 text-center">
    Empowering Kenya’s farms, one harvest at a time 🌱🇰🇪
  </p>
</div>
      </div>
      <div className="flex flex-col gap-5 m-auto">
          <h1 className="text-3xl font-bold text-green-700 text-center">Login</h1>
      <input name="email" value={formDataLogin.email} onChange={handleChange} type="text" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md " placeholder="Email"/>
      
       <input  type="password" name="password" value={formDataLogin.password} onChange={handleChange} className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" placeholder="Password"/>
       

        <div className="flex gap-6 m-auto">
          <input  type="submit" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" value="Cancel"/>
          <input  type="submit" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" value="Login"/>
        </div>

        <p className="text-gray-500">Don't have an account?<span className="text-blue-700 font-semibold cursor-pointer hover:underline">
          <Link href='/auth/signup'>Register</Link> </span></p>
      </div>
      </div>
      </div>
    </form>
  );
}
