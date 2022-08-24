import { NextResponse, NextRequest } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const originUrl = req.nextUrl.origin
    const token = req.cookies.get('TRAX_ACCESS_TOKEN')
    if (!token) {
      return NextResponse.redirect(`${originUrl}/signin`)
    }
  }
}
