"use client";

import { useEffect, useRef } from "react";

const maskUri = (markup: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">${markup}</svg>`,
  )}")`;

const socialLinks = [
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    mask: maskUri(
      `<g fill="none" stroke="white" stroke-width="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.2" cy="6.8" r="0.9" fill="white"/>`,
    ),
  },
  {
    href: "mailto:",
    label: "Email",
    mask: maskUri(
      `<g fill="none" stroke="white" stroke-width="1.6"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4.5 7.5 12 13l7.5-5.5"/></g>`,
    ),
  },
  {
    href: "https://github.com/Alexisdjm",
    label: "GitHub",
    mask: maskUri(
      `<path fill="white" d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>`,
    ),
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    mask: maskUri(
      `<path fill="white" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z"/>`,
    ),
  },
] as const;

export default function SocialSidebar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = navRef.current;
    if (!root) return;

    const pointer = { x: -9999, y: -9999 };

    const paint = () => {
      root.querySelectorAll<HTMLElement>("[data-light]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${pointer.x - rect.left}px`);
        el.style.setProperty("--y", `${pointer.y - rect.top}px`);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      paint();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", paint, true);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", paint, true);
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-0 z-[8] hidden -translate-y-1/2 md:block">
      <nav ref={navRef} className="social-sidebar" aria-label="Social links">
        <div className="social-sidebar-nudge relative flex flex-col items-center gap-5 rounded-full px-3.5 py-5">
          <span data-light aria-hidden="true" className="social-light-ring pointer-events-none absolute inset-0 rounded-full" />
          <ul className="relative flex flex-col items-center gap-5">
            {socialLinks.map(({ href, label, mask }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="inline-flex"
                >
                  <span
                    data-light
                    aria-hidden="true"
                    className="social-light-glyph"
                    style={{ maskImage: mask, WebkitMaskImage: mask }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
