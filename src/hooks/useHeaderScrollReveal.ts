"use client";

import { useEffect, useRef, useState } from "react";

/** Pixels from top where the header sits in normal (absolute) position. */
const AT_TOP_THRESHOLD = 8;
/** Ignore tiny scroll jitter. */
const MIN_SCROLL_DELTA = 4;

export type HeaderScrollMode = "at-top" | "fixed-visible" | "fixed-hidden";

export function useHeaderScrollReveal() {
  const [mode, setMode] = useState<HeaderScrollMode>("at-top");
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;

      if (scrollY <= AT_TOP_THRESHOLD) {
        setMode("at-top");
      } else if (delta > MIN_SCROLL_DELTA) {
        setMode("fixed-hidden");
      } else if (delta < -MIN_SCROLL_DELTA) {
        setMode("fixed-visible");
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return mode;
}
