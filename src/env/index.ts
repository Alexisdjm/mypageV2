export {
  getPublicSiteOrigin,
  getPublicApiOrigin,
  getContactSubmitUrl,
  PRODUCTION_SITE_ORIGIN,
  PRODUCTION_API_ORIGIN,
} from "./public";
export { getGoogleSiteVerification } from "./server";

/** Names for Jenkins / Docker — keep in sync with env.example */
export const ENV_KEYS = {
  publicBuild: ["NEXT_PUBLIC_SITE_URL", "NEXT_PUBLIC_API_URL"] as const,
  serverRuntime: ["GOOGLE_SITE_VERIFICATION"] as const,
  runtime: ["NODE_ENV", "PORT", "HOSTNAME"] as const,
} as const;
