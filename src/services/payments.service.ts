import { cookies } from "next/headers";
import DbConnect from "./DbConnect"
import 'server-only'

export const makeDuePayments=async(email:string,paymentReason:string,packageName:string,fees:string,paymentId:string)=>{
    const db=await  DbConnect()
    const paymentsCollection = db.collection('payments'); 
    const previousDue=await paymentsCollection.findOne({email:email})
    if(previousDue){
        await paymentsCollection.updateOne({email}, {$push:{allPayments:{paymentId,paymentsFor:paymentReason,paymentCreated:new Date(),package:packageName,packagePrice:fees,status:'pending'}}})
    }else{
      const newPaymentDetail={
       email,
       allPayments:[{paymentId,paymentsFor:paymentReason,paymentCreated:new Date(),package:packageName,packagePrice:fees,status:'pending'}]
      }
      await paymentsCollection.insertOne(newPaymentDetail)
    }
}
