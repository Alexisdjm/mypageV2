import type { Messages } from "./messages/types";

export function getMenuLinks(messages: Messages) {
  return [
    { href: "/#capability-heading", label: messages.nav.howIHelp },
    { href: "/#experience-heading", label: messages.nav.experience },
    { href: "/#services-heading", label: messages.nav.services },
    { href: "/#work-heading", label: messages.nav.work },
    { href: "/#stack-heading", label: messages.nav.stack },
  ] as const;
}

export function getFooterSocialLinks(messages: Messages) {
  const { socialLinks } = messages.footer;
  return [
    { label: socialLinks.email, href: "mailto:" },
    { label: socialLinks.github, href: "https://github.com/Alexisdjm" },
    { label: socialLinks.linkedin, href: "https://www.linkedin.com" },
    { label: socialLinks.instagram, href: "https://www.instagram.com/adcodeworks" },
  ] as const;
}
