import DbConnect from '@/services/DbConnect';
import { ObjectId } from 'mongodb';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.PAYMENT_ID
const store_passwd = process.env.PAYMENT_PASS
const is_live = false 

export const POST=async(request:any)=> {
  if (request.method === 'POST') {
    try {
        const email=cookies().get('versatileUserEmail')?.value
     const {paymentId}=await request.json()
      const db = await DbConnect();
      const paymentsCollection=db.collection('payments')
      const userPayment=await paymentsCollection.findOne({email:email})
      const  allPayments=userPayment?.allPayments
      const currentPayment=allPayments?.find((payment:{paymentId:string})=>payment.paymentId===paymentId)
      const{packagePrice,package:packageName,paymentsFor}=currentPayment
       const transId=new ObjectId().toString()
      const data = {
        total_amount: packagePrice,
        currency: 'BDT',
        tran_id: transId, // use unique tran_id for each api call
        success_url: `http://localhost:3000/api/makePayment/paymentSuccessful?transId=${transId}&paymentId=${paymentId}&email=${email}`,
        fail_url: 'http://localhost:3030/fail',
        cancel_url: 'http://localhost:3030/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: packageName,
        product_category: paymentsFor,
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    const apiResponse = await sslcz.init(data);
    const GatewayPageURL = apiResponse?.GatewayPageURL;
     await paymentsCollection.updateOne({email:email},{
      $set:{
        transId:transId,
      }
     })
     return NextResponse.json({message: 'Payment found successfully', successful:true,user:'',url:GatewayPageURL})
    } catch (error:any) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}
