"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToHash } from "@/lib/smoothScroll";

/** Smooth-scroll to `location.hash` after route changes (e.g. footer link from another route). */
export default function HashScrollOnNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      scrollToHash(hash, false);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
