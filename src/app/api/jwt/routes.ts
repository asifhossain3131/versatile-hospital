import { SignJWT } from "jose"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const POST= async(request:any)=>{
const body=await request.json()
const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
  const alg = 'HS256'
  
  const jwt = await new SignJWT(body)
    .setProtectedHeader({ alg })
    .setAudience('urn:example:audience')
    .setExpirationTime('2h')
    .sign(secret)
     
    cookies().set({
        name:'jwtToken',
       value:`bearer ${jwt}`,
       secure:true,
       httpOnly:true
    })
    return NextResponse.json({message:'jwt token has been set'})
}