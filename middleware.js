import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // 1. Redirect based on geo location for dashboard route
  if (pathname === '/dashboard') {
    const region = request.geo?.country?.toLowerCase() || 'default'
    const url = request.nextUrl.clone()
    url.pathname = `/dashboard/${region}`
    return NextResponse.redirect(url)
  }

  // 2. Session token validation for /documents/*
  if (pathname.startsWith('/documents')) {
    const token = request.cookies.get('auth_token')?.value
    if (!token || token !== 'secure123') {
      return new Response('Unauthorized', { status: 401 })
    }
  }

  // 3. Personalize announcements by role
  if (pathname === '/announcements') {
    const role = request.cookies.get('role')?.value || 'resident'
    const url = request.nextUrl.clone()
    url.searchParams.set('filter', role === 'admin' ? 'all' : 'general')
    return NextResponse.redirect(url)
  }

  // Allow all other requests to proceed
  return NextResponse.next()
}

// Define routes this middleware applies to
export const config = {
  matcher: [
    '/dashboard',
    '/documents/:path*',
    '/announcements',
  ],
}
