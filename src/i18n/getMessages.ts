import type { Locale } from "./locales";
import { en } from "./messages/en";
import type { Messages } from "./messages/types";
import { es } from "./messages/es";

const catalogs: Record<Locale, Messages> = {
  en,
  es,
};

export function getMessages(locale: Locale): Messages {
  return catalogs[locale];
}
