import { NextResponse } from "next/server";
import connectToDB from "../../../../database/mongodb";
import User from "@/app/model";
import bcrypt from 'bcryptjs'

export async function POST(params) {
    try {
        const body= await params.json()
        console.log(body)
        const {name,email,password,county,role}=body
        const connect= await connectToDB()
        const exist= await User.findOne({email})
        if(exist){
             return NextResponse.json({ error: "User already exists" }, { status: 409 });
        }
        const hashedPassword =await bcrypt.hash(password,10)
        console.log(password)
        await User.create({
            name,email,password:hashedPassword,location:county,role
        })
            return NextResponse.json({ success: true, message: "User created" });

    } catch (error) {
         console.error("API ERROR:", error); 
        return NextResponse.json({
            success:false,
            message:"something went wrong"
        })
    }
    
}