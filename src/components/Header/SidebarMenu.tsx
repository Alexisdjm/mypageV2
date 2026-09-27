"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { onSectionLinkClick } from "@/lib/smoothScroll";
import SectionLink from "@/src/components/navigation/SectionLink";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/src/components/icons/SocialBrandIcons";
import { Logo } from "@/src/components/svgs";
import { PrimaryCTA } from "@/src/components/UXUI";
import { getMenuLinks } from "@/src/i18n/navLinks";
import { useLocale } from "@/src/i18n/LocaleProvider";

const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://github.com/Alexisdjm", label: "GitHub", Icon: GitHubIcon },
] as const;

type SidebarMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function SidebarMenu({ open, onClose }: SidebarMenuProps) {
  const pathname = usePathname();
  const { messages } = useLocale();
  const menuLinks = getMenuLinks(messages);

  return (
    <div className="xl:hidden absolute">
      <button
        type="button"
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-500 ease-in-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label={messages.nav.closeMenu}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        inert={!open}
        aria-label={messages.nav.menuDialog}
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(78vw,22rem)] flex-col overflow-y-auto bg-white px-8 py-8 text-black transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
      >
        <Link href="/" className="text-black" onClick={onClose}>
          <Logo className="h-24 w-28" />
        </Link>

        <nav className="mt-10" aria-label={messages.nav.mobileAria}>
          <ul className="flex flex-col items-start gap-6">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <SectionLink href={link.href} className="text-base text-black" onClick={onClose}>
                  {link.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10">
          <PrimaryCTA
            variant="dark"
            href="/#contact"
            onClick={(event) => {
              onSectionLinkClick(event, "/#contact", pathname);
              onClose();
            }}
          >
            {messages.nav.contactMe}
          </PrimaryCTA>
        </div>

        <ul className="mt-auto flex items-center gap-5 pt-8">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex text-black"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
