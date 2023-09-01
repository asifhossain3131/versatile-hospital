import DbConnect from "@/services/DbConnect"
import { NextResponse } from "next/server"

export const PUT=async(req:any)=>{
    if(req.method==="PUT"){
        try {
            const user=await req.json()
            const{updatedName,newPhoneNumber,newAddress,newDateOfBirth,newNationality,newOfficalID,newOccupation,CurrentGender,email}=user
            const db=await DbConnect()
            const userCollection=db.collection('users')
            const result=await userCollection.updateOne({email:email},{$set:{
             name:updatedName,
             phoneNumber:newPhoneNumber,
             address:newAddress,
             dateOfBirth:newDateOfBirth,
             nationality:newNationality,
             officalID:newOfficalID,
             occupation:newOccupation,
             gender:CurrentGender
            }},{upsert:true})
            return NextResponse.json({message: 'user updated successfully', updated:result })
        } catch (error) {
            return NextResponse.json({message:'Something went wrong'})
        }
    }
    else{
        return NextResponse.json({message:'Please provide a post method'})
    }
}