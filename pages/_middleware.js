import {getToken} from 'next-auth/jwt'
import {NextResponse} from 'next/server'

export async function middleware(req) {
    // token exist if user is logged in
    const token = await getToken({req, secret: process.env.JWT_SECRET})

    const { pathname } = req.nextUrl
    
    // Allow the Request if is following is true
    // the token exit
    // request for next-auth session & provider Fetching 
    if(pathname.includes('/api/auth') || token ) {
        return NextResponse.next()
    }

    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }
}