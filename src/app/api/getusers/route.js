// app/api/getusers/route.js
import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

// Sample users to insert if collection is empty
const sampleUsers = [
  { email: 'a@gmail.com', name: 'Alice' },
  { email: 'b@gmail.com', name: 'Bob' },
  { email: 'c@gmail.com', name: 'Charlie' }
]

export async function GET() {
  try {
    await client.connect()
    const db = client.db('test')
    const collection = db.collection('users')

    const existing = await collection.find({}).toArray()
    if (existing.length === 0) {
      await collection.insertMany(sampleUsers)
    }

    const users = await collection.find({}).toArray()

    return NextResponse.json(users)
  } catch (err) {
    console.error('Error in getusers:', err)
    return NextResponse.json({ success: false, message: 'Failed to fetch users' }, { status: 500 })
  } finally {
    await client.close()
  }
}
