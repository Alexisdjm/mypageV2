/** Production domain — used when NEXT_PUBLIC_SITE_URL is unset in production builds. */
export const PRODUCTION_SITE_ORIGIN = "https://alexiswebworks.com";

/**
 * Canonical site origin (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL at **build time** (Docker ARG) so sitemap/robots/manifest are correct.
 */
export function getPublicSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* fall through */
    }
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "")}`;
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_SITE_ORIGIN;
  }

  return "http://localhost:3000";
}
