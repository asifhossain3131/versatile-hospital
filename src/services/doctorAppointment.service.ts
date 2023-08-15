import 'server-only'
import DbConnect from './DbConnect'

export const getPersonalAppointmentsFromDB=async(email:string)=>{
    const db=await DbConnect()
    const doctorAppointmentsCollection=db.collection('doctorAppointments')
    const result=await doctorAppointmentsCollection.find({email:email}).toArray()
    return result
}

const removeExpiredDocumentsFromDb=async()=>{
    const db=await DbConnect()
    const doctorAppointmentsCollection=db.collection('doctorAppointments')
    await doctorAppointmentsCollection.createIndex({ date: 1 }, { expireAfterSeconds: 0 });
}

