import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

export async function GET() {
  try {
    // Connect if not already connected
    if (!client.topology || !client.topology.isConnected?.()) {
      await client.connect()
    }

    const db = client.db("test"|| 'your-db-name') // replace with your DB name if not using env var
    const ordersCollection = db.collection('orders') // adjust name if needed

    const orders = await ordersCollection.find({}).toArray()

    return Response.json({ success: true, orders }, { status: 200 })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return Response.json({ success: false, message: 'Failed to fetch orders' }, { status: 500 })
  }
}
