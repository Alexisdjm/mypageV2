"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { onSectionLinkClick } from "@/lib/smoothScroll";
import SectionLink from "@/src/components/navigation/SectionLink";
import { Logo } from "@/src/components/svgs";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";
import { MenuCTA, PrimaryCTA } from "@/src/components/UXUI";
import { SidebarMenu } from "@/src/components/Header";
import { useHeaderScrollReveal } from "@/src/hooks/useHeaderScrollReveal";
import { getMenuLinks } from "@/src/i18n/navLinks";
import { useLocale } from "@/src/i18n/LocaleProvider";
import { useSidebar } from "@/src/hooks/useSidebar";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const { messages } = useLocale();
  const menuLinks = getMenuLinks(messages);
  const { open, openMenu, close } = useSidebar();
  const scrollMode = useHeaderScrollReveal();
  useCursorLight(navRef, { desktopOnly: true, minWidth: 1280 });

  const isFixed = scrollMode !== "at-top";
  const showPinnedBar = scrollMode === "fixed-visible" || (scrollMode === "fixed-hidden" && open);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-950"
      >
        {messages.nav.skipToContent}
      </a>
    <header
      className={cn(
        "inset-x-0 top-0 flex w-full items-center justify-between px-6 pt-4 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:px-10 xl:pt-2 pr-10",
        scrollMode === "at-top" && "absolute z-10 bg-transparent",
        isFixed &&
          "fixed z-50 bg-[#020202]/85 text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md will-change-transform motion-reduce:transition-none motion-reduce:transform-none",
        isFixed &&
          "transition-[transform,opacity,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        showPinnedBar && "translate-y-0 opacity-100",
        scrollMode === "fixed-hidden" && !open && "-translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <Link
        href="/"
        className="text-white xl:justify-self-start"
        aria-label={messages.nav.homeAria}
        onClick={close}
      >
        <Logo className="h-[70px] w-[80px] xl:h-[65px] xl:w-[75px]" />
      </Link>

      <nav
        ref={navRef}
        className="hidden xl:block xl:justify-self-center"
        aria-label={messages.nav.mainAria}
      >
        <ul className="flex items-center gap-6">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <SectionLink
                href={link.href}
                data-light
                className="header-nav-light-link text-sm focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
              >
                {link.label}
              </SectionLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="xl:justify-self-end">
        <div className="hidden xl:block">
          <PrimaryCTA
            href="/#contact"
            onClick={(event) => onSectionLinkClick(event, "/#contact", pathname)}
          >
            {messages.nav.contactMe}
          </PrimaryCTA>
        </div>
        <MenuCTA open={open} onToggle={() => (open ? close() : openMenu())} />
      </div>

      <SidebarMenu open={open} onClose={close} />
    </header>
    </>
  );
}
