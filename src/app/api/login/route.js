import User from "@/app/model"
import connectToDB from "../../../../database/mongodb"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import { cookies } from "next/headers"
export const POST=async (params)=>{
    try {
        const body=await params.json()
        const {email,password}=body
        console.log(body)
        await connectToDB()
        const user=await User.findOne({email})
        const cookiestore=await cookies()
        
        const isMartch= await bcrypt.compare(password,user.password)
        if(!isMartch){
            return NextResponse.json({
                success:false,
             message:'invalid password'
            })
        }else{
          await cookies()
          
             const res= NextResponse.json({
                success:true,
                message:'Login successful'
            })
            res.cookies.set('role',user.role,{
                path:'/',
                sameSite:'lax',
                maxAge:60*10
            })
            res.cookies.set('email',user.email,{
                path:'/',
                sameSite:'lax',
                maxAge:60*10
            })
             return res;
  
        }
    } catch (error) { 
        console.error("API ERROR:", error); 
            return NextResponse.json({
                success:false,
                message:"something went wrong"
            })
    }


}