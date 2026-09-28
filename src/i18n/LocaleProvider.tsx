"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getMessages } from "./getMessages";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  type Locale,
  isLocale,
  localeLabels,
} from "./locales";
import type { Messages } from "./messages/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
  localeLabels: typeof localeLabels;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* private mode */
  }
  document.documentElement.lang = locale;
}

export function LocaleProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const fromCookie = document.cookie
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${LOCALE_COOKIE}=`))
      ?.slice(LOCALE_COOKIE.length + 1);

    if (fromCookie && isLocale(fromCookie)) {
      setLocaleState(fromCookie);
      document.documentElement.lang = fromCookie;
      return;
    }

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: getMessages(locale),
      localeLabels,
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
