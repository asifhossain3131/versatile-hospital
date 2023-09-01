import DbConnect from '@/services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const PUT=async(request:any)=> {
  if (request.method === 'PUT') {
    try {
        const {id,role}=await request.json()
        const  db=await DbConnect()
        const userCollection=db.collection('users')
        const updatedUser=await  userCollection.updateOne({_id:new ObjectId(id)},{
            $set:{
                role:role
            }
        },{upsert:true})

        return NextResponse.json({success:true,message:'updated successfully',data:updatedUser})
       
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}