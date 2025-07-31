import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const body = await req.json();
    const { product, newPrice } = body;

    await client.connect();
    const db = client.db('test');
    const collection = db.collection('prices');

    const result = await collection.updateOne(
      { product },
      { $push: { prices: parseInt(newPrice) } }
    );

    return NextResponse.json({ message: 'Price added', result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add price' }, { status: 500 });
  }
}
