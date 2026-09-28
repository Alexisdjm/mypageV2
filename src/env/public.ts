/** Production frontend origin — sitemap, OG, canonical. */
export const PRODUCTION_SITE_ORIGIN = "https://alexiswebworks.com";

/** Production API origin — contact form POST `${origin}/contact`. */
export const PRODUCTION_API_ORIGIN = "https://api.alexiswebworks.com";

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

/**
 * API base URL (no trailing slash). Set NEXT_PUBLIC_API_URL at **build time** (Docker ARG).
 * Example: https://api.alexiswebworks.com
 */
export function getPublicApiOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      return fromEnv.replace(/\/$/, "");
    }
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_API_ORIGIN;
  }

  return PRODUCTION_API_ORIGIN;
}

/** External backend contact endpoint (Brevo lives on the API server). */
export function getContactSubmitUrl(): string {
  return `${getPublicApiOrigin()}/contact`;
}
