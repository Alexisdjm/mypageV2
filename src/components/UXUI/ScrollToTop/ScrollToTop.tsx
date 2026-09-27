"use client";

import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/src/i18n/LocaleProvider";

const SHOW_AFTER_PX = 320;

export default function ScrollToTop() {
  const { messages } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={messages.site.scrollToTopAria}
      className={`fixed bottom-6 right-6 z-[8] inline-flex size-11 items-center justify-center rounded-full bg-white text-neutral-950 shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}
