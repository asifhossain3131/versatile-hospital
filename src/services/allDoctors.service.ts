import DbConnect from "./DbConnect"
import 'server-only'

export const getAllDoctorsFromDb=async()=>{
    const db=await DbConnect()
    const doctorsCollection=db.collection('allDoctors')
   return await doctorsCollection.find().toArray()
}