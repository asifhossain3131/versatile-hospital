
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose"

export const middleware= async (request: NextRequest)=> {
    const {pathname}=request.nextUrl
try {
    let cookie = request.cookies.get('jwtToken')?.value
    if(!cookie || !cookie.startsWith('bearer')){
        throw new Error('Token is not valid')
    }
    const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
      const jwt =cookie.split('bearer ')[1]
   await jwtVerify(jwt, secret)
   return NextResponse.next()
} catch (error) {
    return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`,request.url))
}
}
 

export const config = {
  matcher:  ['/findDoctors/:path*', '/dashboard/:path*'],
}