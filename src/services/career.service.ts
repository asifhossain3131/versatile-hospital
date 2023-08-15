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

export const deleteJobPostsFromDb=async()=>{
    const db=await DbConnect()
    const currentDate = new Date();
    await db.collection('career').deleteMany({
      deadline: { $lt: currentDate },
    });
}

export const isAnyJobExist=async()=>{
    const db=await DbConnect()
    const jobCount=await db.collection('career').countDocuments();
    return jobCount>0
}