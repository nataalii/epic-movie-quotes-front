import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_ROUTES, GUEST_ROUTES } from 'config';
export function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookies = request.cookies.getAll();
  const authenticated = cookies.some(
    (cookie) => cookie.name === 'authenticated'
  );
  const pathname = request.nextUrl.pathname;

  for (const regex of AUTH_ROUTES) {
    if (regex.test(pathname) && !authenticated) {
      response = NextResponse.rewrite(new URL('/', request.url));
    }
  }
  for (const regex of GUEST_ROUTES) {
    if (regex.test(pathname) && authenticated) {
      response = NextResponse.rewrite(new URL('/news-feed', request.url));
    }
  }
  return response;
}

export const config = {
  matcher: ['/', '/news-feed', '/profile', '/movie-list'],
};
