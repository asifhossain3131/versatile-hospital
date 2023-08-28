import DbConnect from '@/services/DbConnect';
import { makeDuePayments } from '@/services/payments.service';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
      const body=await request.json()

      const db = await DbConnect();
      const doctorAppointmentsCollection = db.collection('doctorAppointments'); 
      
      const appointment={...body,status:'pending',type:'on meet'}
      const result = await doctorAppointmentsCollection.insertOne(appointment);
      if(result.acknowledged===true){
       await makeDuePayments(body?.email,'Doctor appointment',body?.doctor,body?.fees)
      }

      return NextResponse.json({success:true,message: 'Data posted successfully', insertedId: result.insertedId })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}
