import DbConnect from "@/services/DbConnect"

import { NextResponse } from "next/server"

export const POST=async(request:any)=>{
    const {searchParams}=new URL(request.url)
    const email=searchParams.get('email')
    const transId=searchParams.get('transId')
    const paymentId=searchParams.get('paymentId')
const db=await DbConnect()
const paymentsCollection=db.collection('payments')
const updatedPayment=await paymentsCollection.updateOne({email:email,"allPayments.paymentId": paymentId},{
    $set:{
        "allPayments.$.paymentCreated": new Date(),
        "allPayments.$.status": 'paid',
        "allPayments.$.transId": transId
    }
},{upsert:true})
if(updatedPayment?.modified){
    
}
return NextResponse.redirect('http://localhost:3000/dashboard/user/myPayments/paymentsSuccessful')
// return response.json({success:true,message:'successful payment',data:updatedPayment})
}