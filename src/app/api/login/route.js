import User from "@/app/model"
import connectToDB from "../../../../database/mongodb"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

export const POST = async (params) => {
  try {
    const body = await params.json()
    const { email, password } = body

    await connectToDB()
    const user = await User.findOne({ email })
  if (!user) {
  return NextResponse.json(
    { success: false, message: 'User not found' },
    { status: 404 }
  )
}

    const isMatch = await bcrypt.compare(password, user.password)

   if (!isMatch) {
  return NextResponse.json(
    { success: false, message: 'Invalid password' },
    { status: 401 }
  )
  }

    // Create a response and set cookies properly
    const response = NextResponse.json({
      success: true,
      message: 'Login successful'
    })

    response.cookies.set('role', user.role, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 10
    })

    response.cookies.set('email', user.email, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 10
    })

    return response
  } catch (error) {
    console.error("API ERROR:", error)
    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    })
  }
}
