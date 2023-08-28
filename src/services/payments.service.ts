import { cookies } from "next/headers";
import DbConnect from "./DbConnect"
import 'server-only'

export const makeDuePayments=async(email:string,paymentReason:string,packageName:string,fees:string)=>{
  const min = 10000; 
const max = 99999;
    const db=await  DbConnect()
    const paymentsCollection = db.collection('payments'); 
    const previousDue=await paymentsCollection.findOne({email:email})
    if(previousDue){
        await paymentsCollection.updateOne({email}, {$push:{paymentsDues:{paymentId:`${new Date().getDate()}${fees}${Math.floor(Math.random() * (max - min + 1)) + min}`,paymentsFor:paymentReason,paymentCreated:new Date(),package:packageName,packagePrice:fees}}})
    }else{
      const newPaymentDetail={
       email,
       paymentsDues:[{paymentId:`${new Date().getDate()}${fees}${Math.floor(Math.random() * (max - min + 1)) + min}`,paymentsFor:paymentReason,paymentCreated:new Date(),package:packageName,packagePrice:fees}]
      }
      await paymentsCollection.insertOne(newPaymentDetail)
    }
}

export const getPayments=async()=>{
  const userEmail=cookies().get('versatileUserEmail')?.value
  const db=await  DbConnect()
  const paymentsCollection = db.collection('payments');
  const result=await paymentsCollection.findOne({email:userEmail})
  return result
}