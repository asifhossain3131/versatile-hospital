import 'server-only'
import DbConnect from './DbConnect'
import { cookies } from 'next/headers'

export const getPersonalAppointmentsFromDB=async()=>{
    const userEmail=cookies().get('versatileUserEmail')?.value
    const db=await DbConnect()
    const doctorAppointmentsCollection=db.collection('doctorAppointments')
    const result=await doctorAppointmentsCollection.find({email:userEmail}).toArray()
    return result
}

const removeExpiredDocumentsFromDb=async()=>{
    const db=await DbConnect()
    const doctorAppointmentsCollection=db.collection('doctorAppointments')
    await doctorAppointmentsCollection.createIndex({ date: 1 }, { expireAfterSeconds: 0 });
}

