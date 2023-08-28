import DbConnect from '@/services/DbConnect';
import { makeDuePayments } from '@/services/payments.service';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
        const body=await request.json()
        const department=body.department

      const db = await DbConnect();
      const doctorCollection = db.collection('allDoctors'); 
      const appointmentCollection = db.collection('doctorAppointments'); 
      const departmentDoctors=await doctorCollection.find({department:department}).toArray()
      let doctorName:string
      let fees:string
      if(departmentDoctors.length>0){
       const randomIndex=Math.floor(Math.random()*departmentDoctors?.length)
       const randomDoctor=departmentDoctors[randomIndex]
       doctorName=randomDoctor?.name
       fees=randomDoctor?.fees
      } else{
        doctorName=departmentDoctors[0]?.name
        fees=departmentDoctors[0]?.fees
      }
      const appointment={...body,doctor:doctorName,type:'telemedicine',status:'pending'}
      const result = await appointmentCollection.insertOne(appointment)
      if(result.acknowledged===true){
        await makeDuePayments(body?.email,'Doctor appointment',doctorName,fees)
       }

      return NextResponse.json({success:true,message: 'Data posted successfully', insertedId: result.insertedId })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}