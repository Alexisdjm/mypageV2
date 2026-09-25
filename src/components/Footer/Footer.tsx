"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";
import {
  footerIndexLinks,
  footerSite,
  footerSocialLinks,
} from "@/src/config/footer";
import FooterClock from "./FooterClock";
import WordEffect from "./WordEffect";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col text-left">
      <p className="text-xs font-normal tracking-[0.12em] text-white/45 uppercase">{title}</p>
      <div className="mt-4 flex flex-col gap-2 text-base text-white/85">{children}</div>
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  useCursorLight(footerRef);

  const { authorName, basedIn, copyrightYear } = footerSite;

  return (
    <footer ref={footerRef} className="relative z-4 shrink-0 bg-black pb-0">
      <span
        data-light
        aria-hidden="true"
        className="ui-footer-rule pointer-events-none"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 px-5 py-16 md:px-6 lg:grid-cols-4">
        <FooterColumn title="Index">
          <nav aria-label="Footer index">
            <ul className="flex flex-col gap-2">
              {footerIndexLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="mt-2 inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
            aria-haspopup="listbox"
            aria-label="Site language"
          >
            English
            <ChevronDown className="size-4 text-white/60" aria-hidden="true" />
          </button>
        </FooterColumn>

        <FooterColumn title="Social">
          <nav aria-label="Social links">
            <ul className="flex flex-col gap-2">
              {footerSocialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="transition-colors hover:text-white"
                    {...(href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer" })}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </FooterColumn>

        <FooterColumn title="Based in">
          <p>{basedIn}</p>
          <FooterClock />
        </FooterColumn>

        <FooterColumn title={`© ${copyrightYear}`}>
          <p>{authorName}</p>
          <p className="text-white/70">All rights reserved</p>
        </FooterColumn>
      </div>
      <span
        data-light
        aria-hidden="true"
        className="ui-footer-rule pointer-events-none"
      />
      <WordEffect baseColor="#141414" glowColor="#232323" />
    </footer>
  );
}
