import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

//creo middleware para q el user logeado no pueda acceder a las pages login, create user

export const config = { //creo el matcher especificando q pages no acceder
    matcher: [
        '/login/:path*',
        '/signup/:path*',
    ]
}

export function middleware(request: NextRequest) {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')?.value; 
    if (accessToken) { //si tengo accessToken redirijo a store
        return NextResponse.redirect(new URL('/store', request.url))
    }
}