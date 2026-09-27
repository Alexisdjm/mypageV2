export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "portfolio-locale";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};
