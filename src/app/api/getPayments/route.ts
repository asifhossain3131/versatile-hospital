import DbConnect from '@/services/DbConnect';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
       const {status}=await request.json()
        const userEmail=cookies().get('versatileUserEmail')?.value
        const db=await  DbConnect()
        const paymentsCollection = db.collection('payments');
        const result=await paymentsCollection.findOne({email:userEmail})
        const allPayments=result?.allPayments
        let currentPayments
        if(status){
            currentPayments=allPayments?.filter((payment:{status:string})=>payment.status===status)
        }
        else{
            currentPayments=allPayments
        }
      return NextResponse.json({message: 'User found successfully', successful:true,payments:currentPayments })
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}