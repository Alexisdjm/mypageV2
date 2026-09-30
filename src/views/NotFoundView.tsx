"use client";

import { useRef } from "react";
import NotFound404Outline from "@/src/components/NotFound/NotFound404Outline";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";
import PrimaryCTA from "@/src/components/UXUI/PrimaryCTA/PrimaryCTA";
import { useLocale } from "@/src/i18n/LocaleProvider";

export default function NotFoundView() {
  const rootRef = useRef<HTMLElement>(null);
  useCursorLight(rootRef);
  const { messages } = useLocale();

  return (
    <main
      ref={rootRef}
      className="flex min-h-dvh flex-col items-center justify-center bg-[#020202] px-6 py-16"
    >
      <div className="text-center">
        <NotFound404Outline />
        <p
          data-light
          className="not-found-light-text not-found-heading text-lg font-normal tracking-wide sm:text-xl"
        >
          {messages.site.notFoundHeading}
        </p>
      </div>

      <PrimaryCTA href="/" className="mt-12 px-8">
        {messages.site.notFoundBackHome}
      </PrimaryCTA>
    </main>
  );
}
