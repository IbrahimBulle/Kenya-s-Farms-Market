'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay",
    "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu",
    "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru",
    "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua",
    "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia",
    "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];
const router =useRouter()
  const [formData,setFormData]= useState({
    name:"",
    email:"",
    password:"",
    conPass:"",
    county:"",
    role:""
  })
const handleChange=(e)=>{
  const {name,value} =e.target;
  setFormData(prev=>({
    ...prev,
    [name]:value
  }))
}

const handleSubmit =async (e)=>{
  e.preventDefault()
  for (const key in formData){
    if(formData[key]===''){
        alert(`${key} is required`)
        return;
    }
}
  if(formData.password !== formData.conPass ){
    alert('Passwords do no mach')
    return
  }else if(formData.password.length<8){
    alert('Passwords should be more than 8 characters')
    return
  }

  try {
    const res=await fetch('/api/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
    })
    const data = await res.json();
    if(!res.ok){
        console.log("failed to send data")
        alert(data.error || "Failed to signup");
      return;
    }
    alert("Account created! Redirecting to login…");
    setFormData({
   name:"",
    email:"",
    password:"",
    conPass:"",
    county:"",
    role:""
})
    router.push('/login')

  } catch (error) {
    console.error(e);
  }
console.log("formdata is submitted",formData)

}

  return (
    <>
      <form className="bg-green-700 " onSubmit={handleSubmit} onChange={handleChange}>
      <div className="bg-white flex  items-center justify-start min-h-screen rounded-tr-[200px] ">
      <div className="bg-green-700 w-[50vw] h-[100vh] rounded-bl-[200px] rounded-tr-[200px] flex flex-col justify-center items-center px-6 text-white max-sm:w-[100%] ">
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

      <div className="flex flex-col gap-5 m-auto">
          <h1 className="text-3xl font-bold text-green-700 text-center">Signup</h1>
         
      <input  onChange={handleChange} name='name' type="text" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md " placeholder="Name" value={formData.name}/>
      <input onChange={handleChange}  name='email' type="email" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" placeholder="Email" value={formData.email}/>
       <input onChange={handleChange}  name='password' type="password" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" placeholder="Password" value={formData.password}/>
        <input onChange={handleChange}  name='conPass' type="password" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" placeholder="Confirm Password" value={formData.conPass}/>

         <select
          id="county"
          name="county"
          className="w-full border-2 border-green-600 text-black px-4 py-2 rounded-md"
            value={formData.county}
            onChange={handleChange}
        >
          <option value="" disabled hidden >-- Location--</option>
          {counties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
         <div className="flex gap-6 m-auto">
     <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="role"
     value="Farmer"
     checked={formData.role === "Farmer"}
     onChange={handleChange}

      className="border-2 border-green-600 text-black font-black"
    />
    <span className="text-black font-black">Farmer</span>
    </label>

    <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name="role"
     value="Buyer"
      checked={formData.role === "Buyer"}
       onChange={handleChange}

      className="border-2 border-green-600 text-black font-black"
    />
    <span className="text-black font-black">Buyer</span>
     </label>
    </div>

        <div className="flex gap-6 m-auto">
          <input  type="submit" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" value="Cancel"/>
          <input  type="submit" className="border-2 border-green-600 text-black font-black px-4 py-2 rounded-md" value="Submit"/>
        </div>

        <p className="text-gray-500">Already have an account?<span className="text-blue-700 font-semibold cursor-pointer hover:underline">
            <Link href='/auth/login'>Login</Link> </span></p>
      </div>
      </div>
     </form>
    </>
  );
}
