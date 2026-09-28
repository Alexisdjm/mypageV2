export type ContactMailConfig = {
  apiKey: string;
  senderEmail: string;
  senderName: string;
  contactToEmail: string;
};

/** Brevo / contact form — runtime only (inject via Jenkins / container env). */
export function getContactMailConfig(): ContactMailConfig | null {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  const contactToEmail = process.env.BREVO_CONTACT_TO_EMAIL?.trim();
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || "Alexis Portfolio";

  if (!apiKey || !senderEmail || !contactToEmail) {
    return null;
  }

  return {
    apiKey,
    senderEmail,
    senderName,
    contactToEmail,
  };
}

/** Optional Google Search Console verification meta tag content. */
export function getGoogleSiteVerification(): string | undefined {
  const value = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return value || undefined;
}
