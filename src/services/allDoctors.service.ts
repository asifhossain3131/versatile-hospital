import { ObjectId } from "mongodb"
import DbConnect from "./DbConnect"
import 'server-only'

export const getAllDoctorsFromDb=async()=>{
    const db=await DbConnect()
    const doctorsCollection=db.collection('allDoctors')
   return await doctorsCollection.find().toArray()
}

export const getDoctorsByDepartmentName=async(department:string)=>{
    const db=await DbConnect()
    const doctorsCollection=db.collection('allDoctors')
    const query={
        department:department
    }
   return await doctorsCollection.find(query).toArray()
}

export const getDoctorByIdFromdb=async(id:string)=>{
    const db=await DbConnect()
    const doctorsCollection=db.collection('allDoctors')
    const query={
        _id:new ObjectId(id)
    }
   return await doctorsCollection.findOne(query)
}