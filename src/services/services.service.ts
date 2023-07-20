import { ObjectId } from "mongodb"
import DbConnect from "./DbConnect"
import 'server-only'

export const getHospitalServiesNamesFromDb=async()=>{
    const db=await DbConnect()
    const hospitalServiceCollection=db.collection('hospitalServices')
     const servies=await hospitalServiceCollection.find().toArray()
     const serviceNames=servies.map((service:any)=>service.serviceName)
     return serviceNames
}
export const getSingleServiceInfoFromDb=async(serviceName:string)=>{
    const db=await DbConnect()
    const hospitalServiceCollection=db.collection('hospitalServices')
     const servie=await hospitalServiceCollection.findOne({serviceName:serviceName})
     return servie
}
export const getDiagnosticServiesNamesFromDb=async()=>{
    const db=await DbConnect()
    const diagnosticServiceCollection=db.collection('diagnosticServices')
     const servies=await diagnosticServiceCollection.find().toArray()
     const serviceNames=servies.map((service:any)=>service.serviceName)
     return serviceNames
}
