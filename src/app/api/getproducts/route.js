import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

export async function GET(){
 try {
    await client.connect()
    const db=client.db('test')
    const collection=db.collection('addproducts')

    const existing = await collection.find({}).toArray()
    if (existing.length === 0) {
      await collection.insertMany(
        samplePrices.map((item) => ({
          ...item,
          average:
            item.daily.reduce((sum, price) => sum + price, 0) / item.daily.length,
        }))
      )
    }
    const prices = await collection.find({}).toArray()

    return NextResponse.json(prices)
 } catch (err) {
     console.error('Error in getprices:', err)
     return NextResponse.json({ success: false, message: 'Failed to fetch products' }, { status: 500 })
   } finally {
     await client.close()
   }
 }
 