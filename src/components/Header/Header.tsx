"use client";

import Link from "next/link";
import { Logo } from "@/src/components/svgs";
import { MenuCTA, PrimaryCTA } from "@/src/components/UXUI";
import { SidebarMenu } from "@/src/components/Header";
import { menuLinks } from "@/src/config/siteNav";
import { useSidebar } from "@/src/hooks/useSidebar";

export default function Header() {
  const { open, openMenu, close } = useSidebar();

  return (
    <header className="absolute inset-x-0 top-0 z-10 flex w-full items-center justify-between bg-transparent px-6 py-4 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:px-10 xl:py-6 pr-10">
      <Link href="/" className="text-white xl:justify-self-start" onClick={close}>
        <Logo className="h-[70px] w-[80px] xl:h-[65px] xl:w-[75px]" />
      </Link>

      <nav className="hidden xl:block xl:justify-self-center" aria-label="Main">
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
          <PrimaryCTA href="/#contact">Contact me</PrimaryCTA>
        </div>
        <MenuCTA open={open} onToggle={() => (open ? close() : openMenu())} />
      </div>

      <SidebarMenu open={open} onClose={close} />
    </header>
  );
}
