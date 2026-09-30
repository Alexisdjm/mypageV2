"use client";

import { Mail } from "lucide-react";
import { useRef } from "react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/src/components/icons/SocialBrandIcons";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";

const iconClass = "size-[22px] shrink-0";

const socialLinks = [
  { href: "https://www.instagram.com/adcodeworks", label: "Instagram" },
  { href: "mailto:", label: "Email" },
  { href: "https://github.com/Alexisdjm", label: "GitHub" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
] as const;

function SocialIcon({ label }: { label: (typeof socialLinks)[number]["label"] }) {
  switch (label) {
    case "Instagram":
      return <InstagramIcon className={iconClass} />;
    case "Email":
      return <Mail className={iconClass} strokeWidth={1.6} aria-hidden="true" />;
    case "GitHub":
      return <GitHubIcon className={iconClass} />;
    case "LinkedIn":
      return <LinkedInIcon className={iconClass} />;
  }
}

export default function SocialSidebar() {
  const navRef = useRef<HTMLElement>(null);
  useCursorLight(navRef, { desktopOnly: true, minWidth: 1280 });

  return (
    <div className="fixed top-1/2 right-0 z-[8] hidden -translate-y-1/2 xl:block">
      <nav ref={navRef} className="social-sidebar" aria-label="Social links">
        <div className="social-sidebar-nudge relative flex flex-col items-center gap-5 overflow-hidden rounded-full bg-black/50 px-3.5 py-5 shadow-[4px_0_6px_rgba(0,0,0,0.45)] backdrop-blur-[6px]">
          <span
            data-light
            aria-hidden="true"
            className="ui-card-ring pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
          />
          <ul className="relative z-[1] flex flex-col items-center gap-5">
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="inline-flex text-white/90 transition-colors hover:text-white"
                >
                  <SocialIcon label={label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
