export const config = {
  matcher: ['/dashboard'],
};

export default function middleware(request) {
  const region = request.geo?.country || 'default';
  const url = request.nextUrl.clone();

  url.pathname = `/dashboard/${region.toLowerCase()}`;
  return Response.redirect(url);
}
