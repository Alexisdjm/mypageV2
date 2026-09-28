import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, type Locale } from "./locales";

/** ISO 3166-1 alpha-2 — countries where Spanish is the primary language. */
const SPANISH_COUNTRY_CODES = new Set([
  "ES",
  "MX",
  "AR",
  "CO",
  "CL",
  "PE",
  "VE",
  "EC",
  "GT",
  "CU",
  "BO",
  "DO",
  "HN",
  "PY",
  "SV",
  "NI",
  "CR",
  "PA",
  "UY",
  "PR",
  "GQ",
]);

const GEO_COUNTRY_HEADERS = [
  "cf-ipcountry",
  "x-vercel-ip-country",
  "x-country-code",
  "x-geo-country",
  "cloudfront-viewer-country",
] as const;

export function localeFromCountryCode(country: string | null | undefined): Locale | null {
  if (!country) return null;
  const code = country.trim().toUpperCase();
  if (code === "XX" || code === "T1") return null;
  return SPANISH_COUNTRY_CODES.has(code) ? "es" : "en";
}

/** Browsers send this on every request — useful when geo headers are unavailable (e.g. local dev). */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;

  for (const part of header.split(",")) {
    const tag = part.trim().split(";")[0]?.toLowerCase();
    if (!tag) continue;
    if (tag === "es" || tag.startsWith("es-")) return "es";
    if (tag === "en" || tag.startsWith("en-")) return "en";
  }

  return DEFAULT_LOCALE;
}

function readCountryFromHeaders(get: (name: string) => string | null): string | null {
  for (const name of GEO_COUNTRY_HEADERS) {
    const value = get(name);
    if (value) return value;
  }
  return null;
}

export function detectLocaleFromRequest(request: NextRequest): Locale {
  return detectLocaleFromHeaders((name) => request.headers.get(name));
}

export function detectLocaleFromHeaders(
  getHeader: (name: string) => string | null,
): Locale {
  const fromCountry = localeFromCountryCode(readCountryFromHeaders(getHeader));
  if (fromCountry) return fromCountry;
  return localeFromAcceptLanguage(getHeader("accept-language"));
}
