import { NextResponse } from "next/server"

export const POST= async(request:any)=>{
const res= new NextResponse(
    JSON.stringify({
        message:'token removed'
    })
)
res.cookies.set('jwtToken','',{
    expires: new Date(Date.now())
})
return res
}