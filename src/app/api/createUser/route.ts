import DbConnect from "@/services/DbConnect"
import { NextResponse } from "next/server"

export const POST=async(req:any)=>{
    if(req.method==="POST"){
        try {
            const user=await req.json()
            const db=await DbConnect()
            const userCollection=db.collection('users')
            const isExist=await userCollection.findOne({email:user.email})
            if(isExist){
                return NextResponse.json({message: 'user already exist' })
            }
            const result=await userCollection.insertOne(user)
            return NextResponse.json({message: 'user inserted successfully',insertedId: result.insertedId })
        } catch (error) {
            return NextResponse.json({message:'Something went wrong'})
        }
    }
    else{
        return NextResponse.json({message:'Please provide a post method'})
    }
}