import { ObjectId } from "mongodb"
import DbConnect from "./DbConnect"
import 'server-only'

export const getAllJobsFromDb=async()=>{
    const db=await DbConnect()
    const careerCollection=db.collection('career')
   return await careerCollection.find().toArray()
}
export const getSingleJobFromDb=async(id:string)=>{
    const db=await DbConnect()
    const careerCollection=db.collection('career')
   return await careerCollection.findOne({_id:new ObjectId(id)})
}