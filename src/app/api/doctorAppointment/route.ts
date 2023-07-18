import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
      const body=await request.json()

      const db = await DbConnect();

      const collection = db.collection('doctorAppointments'); 
      const result = await collection.insertOne(body);

      return NextResponse.json({message: 'Data posted successfully', insertedId: result.insertedId })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}
