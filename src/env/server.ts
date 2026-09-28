/** Optional Google Search Console verification meta tag content. */
export function getGoogleSiteVerification(): string | undefined {
  const value = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return value || undefined;
}
