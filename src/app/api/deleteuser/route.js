// /app/api/deleteuser/route.js
// import { NextResponse } from "next/server";
// import connectToDB from "../../../../database/mongodb";
// import User from "@/app/model"; // Adjust path if different

// export async function DELETE(req) {
//   try {
//     const { id } = await req.json();
//     await connectToDB();
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }
//     return NextResponse.json({ message: "User deleted" });
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function DELETE(req) {
  try {
    await client.connect();
    const db = client.db('test'); 
    const collection = db.collection('users');
    console.log('Deleting user with email:', req);

    const { email } = await req.json();

    const result = await collection.deleteOne({ email });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'User deleted' });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
