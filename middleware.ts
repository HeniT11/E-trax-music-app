import { NextResponse } from 'next/server'

const singnedinPages = ['/', '/playlist', 'library']
export default function middleware(req) {
  if (singnedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN
    console.log('token', token)
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.redirect(url)
    }
  }
}
