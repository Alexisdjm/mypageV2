export { getPublicSiteOrigin, PRODUCTION_SITE_ORIGIN } from "./public";
export {
  getContactMailConfig,
  getGoogleSiteVerification,
  type ContactMailConfig,
} from "./server";

/** Names for Jenkins / Docker — keep in sync with env.example */
export const ENV_KEYS = {
  public: ["NEXT_PUBLIC_SITE_URL"] as const,
  server: [
    "BREVO_API_KEY",
    "BREVO_SENDER_EMAIL",
    "BREVO_SENDER_NAME",
    "BREVO_CONTACT_TO_EMAIL",
    "GOOGLE_SITE_VERIFICATION",
  ] as const,
  runtime: ["NODE_ENV", "PORT", "HOSTNAME"] as const,
} as const;
