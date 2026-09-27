"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import FooterLanguageSelect from "@/src/components/Footer/FooterLanguageSelect";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";
import { useLocale } from "@/src/i18n/LocaleProvider";
import { getFooterSocialLinks, getMenuLinks } from "@/src/i18n/navLinks";
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
  const { messages } = useLocale();
  const { footer, site } = messages;
  const menuLinks = getMenuLinks(messages);
  const footerSocialLinks = getFooterSocialLinks(messages);

  return (
    <footer ref={footerRef} className="relative z-4 shrink-0 bg-black pb-0">
      <span
        data-light
        aria-hidden="true"
        className="ui-footer-rule pointer-events-none"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 px-5 py-16 md:px-6 lg:grid-cols-4">
        <FooterColumn title={footer.index}>
          <nav aria-label={footer.indexNavAria}>
            <ul className="flex flex-col gap-2">
              {menuLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <FooterLanguageSelect />
        </FooterColumn>

        <FooterColumn title={footer.socialTitle}>
          <nav aria-label={footer.socialNavAria}>
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

        <FooterColumn title={footer.basedIn}>
          <p>{footer.location}</p>
          <FooterClock />
        </FooterColumn>

        <FooterColumn title={`© ${site.copyrightYear}`}>
          <p>{site.authorName}</p>
          <p className="text-white/70">{footer.rights}</p>
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
