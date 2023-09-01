import DbConnect from '@/services/DbConnect';
import { error } from 'console';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
       const {role}=await request.json()
        const userEmail=cookies().get('versatileUserEmail')?.value
        const db=await  DbConnect()
        const usersCollection = db.collection('users');
        const user=await usersCollection.findOne({email:userEmail})
        if(user?.role!=='admin'){
        return NextResponse.json({success:false,message:'unauthorized acccess',status:400})
        }
        if(role==='all'){
            const result=await usersCollection.find().toArray()
            return NextResponse.json({success:true,message: 'User found successfully', successful:true,users:result })
        }
        else{
            const result=await usersCollection.find({role:role}).toArray()
            return NextResponse.json({success:true,message: 'User found successfully', successful:true,users:result })
        }
       
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}