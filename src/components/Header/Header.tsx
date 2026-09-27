"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/src/components/svgs";
import { MenuCTA, PrimaryCTA } from "@/src/components/UXUI";
import { SidebarMenu } from "@/src/components/Header";
import { useHeaderScrollReveal } from "@/src/hooks/useHeaderScrollReveal";
import { getMenuLinks } from "@/src/i18n/navLinks";
import { useLocale } from "@/src/i18n/LocaleProvider";
import { useSidebar } from "@/src/hooks/useSidebar";

export default function Header() {
  const { messages } = useLocale();
  const menuLinks = getMenuLinks(messages);
  const { open, openMenu, close } = useSidebar();
  const scrollMode = useHeaderScrollReveal();

  const isFixed = scrollMode !== "at-top";
  const showPinnedBar = scrollMode === "fixed-visible" || (scrollMode === "fixed-hidden" && open);

  return (
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
      <Link href="/" className="text-white xl:justify-self-start" onClick={close}>
        <Logo className="h-[70px] w-[80px] xl:h-[65px] xl:w-[75px]" />
      </Link>

      <nav className="hidden xl:block xl:justify-self-center" aria-label={messages.nav.mainAria}>
        <ul className="flex items-center gap-6">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="xl:justify-self-end">
        <div className="hidden xl:block">
          <PrimaryCTA href="/#contact">{messages.nav.contactMe}</PrimaryCTA>
        </div>
        <MenuCTA open={open} onToggle={() => (open ? close() : openMenu())} />
      </div>

      <SidebarMenu open={open} onClose={close} />
    </header>
  );
}
