"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { onSectionLinkClick } from "@/lib/smoothScroll";
import SectionLink from "@/src/components/navigation/SectionLink";
import FooterLanguageSelect from "@/src/components/Footer/FooterLanguageSelect";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/src/components/icons/SocialBrandIcons";
import { Logo } from "@/src/components/svgs";
import { getMenuLinks } from "@/src/i18n/navLinks";
import { useLocale } from "@/src/i18n/LocaleProvider";

const socialIconClass = "size-[25px] shrink-0";

/** Order: Instagram, LinkedIn, GitHub */
const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
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
    <div className="xl:hidden">
      <button
        type="button"
        className={`fixed inset-0 z-[60] bg-black/70 transition-opacity duration-500 ease-in-out ${
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
        className={`fixed inset-y-0 left-0 z-[70] flex h-dvh w-[min(78vw,22rem)] flex-col bg-white px-8 py-8 text-black transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
      >
        <div className="flex shrink-0 justify-center">
          <Link
            href="/"
            className="inline-flex h-[120px] w-[120px] items-center justify-center text-black"
            onClick={onClose}
          >
            <Logo className="h-[120px] w-[120px] text-black" aria-hidden="true" />
            <span className="sr-only">{messages.nav.homeAria}</span>
          </Link>
        </div>

        <nav
          className="mt-10 min-h-0 flex-1 overflow-y-auto"
          aria-label={messages.nav.mobileAria}
        >
          <ul className="flex flex-col items-start gap-6">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <SectionLink href={link.href} className="text-base text-black" onClick={onClose}>
                  {link.label}
                </SectionLink>
              </li>
            ))}
            <li>
              <SectionLink
                href="/#contact"
                className="text-base text-black"
                onClick={(event) => {
                  onSectionLinkClick(event, "/#contact", pathname);
                  onClose();
                }}
              >
                {messages.nav.contactMe}
              </SectionLink>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex shrink-0 flex-col items-start">
          <ul className="flex items-center gap-[30px]" aria-label={messages.footer.socialNavAria}>
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex text-black"
                >
                  <Icon className={socialIconClass} />
                </a>
              </li>
            ))}
          </ul>
          <FooterLanguageSelect theme="light" className="mt-6" />
        </div>
      </div>
    </div>
  );
}
