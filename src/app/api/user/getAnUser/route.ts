import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const GET = async (request: any) => {
  try {
    if (request.method === 'GET') {
      const db = await DbConnect();

      try {
        const userCollection = db.collection('users');
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
          return NextResponse.json({ message: 'Invalid or missing email parameter', successful: 0 });
        }

        const user = await userCollection.findOne({ email });
        // await db.close(); 

        if (user) {
          return NextResponse.json({ message: 'User found successfully', successful: 1, user });
        } else {
          return NextResponse.json({ message: 'User not found', successful: 0 });
        }
      } catch (error:any) {
        console.error('Error fetching user data:', error.message);
        return NextResponse.json({ message: 'Error fetching user data', successful: 0, error: error.message });
      }
    } else {
      return NextResponse.json({ message: 'Method Not Allowed', successful: 0 });
    }
  } catch (error:any) {
    console.error('Unexpected error:', error.message);
    return NextResponse.json({ message: 'Unexpected error', successful: 0, error: error.message });
  }
};
