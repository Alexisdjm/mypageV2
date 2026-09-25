"use client";

import { useEffect, useState } from "react";

function formatEstClock(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export default function FooterClock() {
  const [time, setTime] = useState(() => formatEstClock(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatEstClock(new Date())), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="inline-flex items-center gap-2 text-base text-white/80">
      <span className="size-2 shrink-0 rounded-full bg-lime-400" aria-hidden="true" />
      <time suppressHydrationWarning>{time} EST</time>
    </p>
  );
}
