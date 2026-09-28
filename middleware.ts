import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { detectLocaleFromRequest } from "@/src/i18n/detectLocale";
import { isLocale, LOCALE_COOKIE } from "@/src/i18n/locales";

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (existing && isLocale(existing)) {
    return NextResponse.next();
  }

  const detected = detectLocaleFromRequest(request);
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, detected, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|pdf|ico)$).*)",
  ],
};
