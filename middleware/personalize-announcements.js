export const config = {
  matcher: ['/announcements'],
};

export default function middleware(request) {
  const role = request.cookies.get('role')?.value || 'resident';
  const url = request.nextUrl.clone();

  url.searchParams.set('filter', role === 'admin' ? 'all' : 'general');
  return Response.redirect(url);
}
