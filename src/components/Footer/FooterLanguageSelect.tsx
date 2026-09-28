"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LOCALES, type Locale } from "@/src/i18n/locales";
import { useLocale } from "@/src/i18n/LocaleProvider";

type FooterLanguageSelectProps = {
  /** Footer (dark bg) or mobile sidebar (light bg). */
  theme?: "dark" | "light";
  className?: string;
};

export default function FooterLanguageSelect({
  theme = "dark",
  className = "",
}: FooterLanguageSelectProps) {
  const { locale, setLocale, localeLabels, messages } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const isLight = theme === "light";

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const choose = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 transition-colors",
          isLight
            ? "text-black hover:text-black/70"
            : "text-white/85 hover:text-white",
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={messages.footer.languageAria}
        onClick={() => setOpen((value) => !value)}
      >
        {localeLabels[locale]}
        <ChevronDown
          className={cn("size-4", isLight ? "text-black/50" : "text-white/60")}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={messages.footer.languageAria}
          className={cn(
            "absolute left-0 z-[80] min-w-[9rem] rounded-[10px] border py-1 shadow-lg",
            /* Sidebar sits at the bottom of the viewport — open upward so options stay on screen. */
            isLight
              ? "bottom-full mb-2 border-black/15 bg-white"
              : "bottom-full mb-2 border-white/15 bg-[#141414]",
          )}
        >
          {LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                className={cn(
                  "block w-full px-3 py-2 text-left text-sm transition-colors",
                  isLight
                    ? locale === code
                      ? "text-black"
                      : "text-black/70 hover:bg-black/5"
                    : locale === code
                      ? "text-white"
                      : "text-white/75 hover:bg-white/10",
                )}
                onClick={() => choose(code)}
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
