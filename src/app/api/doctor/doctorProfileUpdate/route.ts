import DbConnect from '@/services/DbConnect';
import { makeDuePayments } from '@/services/payments.service';
import getDoctorById from '@/utils/getDoctorById';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
      const body=await request.json()
      const db = await DbConnect();
      const doctorAppointmentsCollection = db.collection('officalProfileUpdates')
      const prevRequest=await doctorAppointmentsCollection.findOne({email:body?.email})
      if(prevRequest){
        return NextResponse.json({success:false,message:'already a request existed'})
      }
      const result=await doctorAppointmentsCollection.insertOne(body)

      return NextResponse.json({success:true,message: 'Data posted successfully', data:result })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}
