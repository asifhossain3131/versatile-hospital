import DbConnect from '@/services/DbConnect';
import { makeDuePayments } from '@/services/payments.service';
import getDoctorById from '@/utils/getDoctorById';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
      const min = 10000; 
      const max = 99999;
      const body=await request.json()
      const doctorId=body?.doctorId
      const db = await DbConnect();
      const doctorAppointmentsCollection = db.collection('doctorAppointments'); 
      const targetDoctor=await  getDoctorById(doctorId)   

    const paymentId=`${new Date().getDate()}${targetDoctor?.fees}${Math.floor(Math.random() * (max - min + 1)) + min}`
      const appointment={...body,status:'pending',type:'on meet',doctor:targetDoctor?.name,fees:targetDoctor?.fees,department:targetDoctor?.department,paymentId}
      const result = await doctorAppointmentsCollection.insertOne(appointment);
      if(result.acknowledged===true){
       await makeDuePayments(body?.email,'Doctor appointment',targetDoctor?.name,targetDoctor?.fees,paymentId)
      }

      return NextResponse.json({success:true,message: 'Data posted successfully', insertedId: result.insertedId })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}
