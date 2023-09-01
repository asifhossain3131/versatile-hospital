import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const GET=async(request:any)=> {
  if (request.method === 'GET') {
    try {
      const db = await DbConnect();
      const userCollection=db.collection('users')
      const {searchParams}=new URL(request.url)
      const email=searchParams.get('email')
      const user=await userCollection.findOne({email:email})
      return NextResponse.json({message: 'User found successfully', successful:1,user:user })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}