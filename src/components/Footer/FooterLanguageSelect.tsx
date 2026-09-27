"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { LOCALES, type Locale } from "@/src/i18n/locales";
import { useLocale } from "@/src/i18n/LocaleProvider";

export default function FooterLanguageSelect() {
  const { locale, setLocale, localeLabels, messages } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

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
    <div ref={rootRef} className="relative mt-2">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={messages.footer.languageAria}
        onClick={() => setOpen((value) => !value)}
      >
        {localeLabels[locale]}
        <ChevronDown className="size-4 text-white/60" aria-hidden="true" />
      </button>
      {open ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={messages.footer.languageAria}
          className="absolute bottom-full left-0 z-20 mb-2 min-w-[9rem] rounded-[10px] border border-white/15 bg-[#141414] py-1 shadow-lg"
        >
          {LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                className={`block w-full px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 ${
                  locale === code ? "text-white" : "text-white/75"
                }`}
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
