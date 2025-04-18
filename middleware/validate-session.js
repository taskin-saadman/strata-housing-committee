export const config = {
  matcher: ['/documents/:path*'],
};

export default function middleware(request) {
  const token = request.cookies.get('auth_token')?.value;

  if (!token || token !== 'secure123') {
    return new Response('Unauthorized', { status: 401 });
  }

  return Response.next();
}
