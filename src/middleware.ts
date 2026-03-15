import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "energiekenner.nl";

export function middleware(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl;

  // Redirect www → non-www (301 permanent)
  if (hostname === `www.${CANONICAL_HOST}`) {
    return NextResponse.redirect(
      `https://${CANONICAL_HOST}${pathname}${search}`,
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2|js|css)$).*)",
  ],
};
