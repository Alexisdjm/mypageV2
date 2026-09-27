import type { MouseEvent } from "react";

function normalizePath(pathname: string) {
  return pathname === "" ? "/" : pathname;
}

export function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function parseAppHref(href: string) {
  const url = new URL(href, "http://localhost");
  return {
    pathname: normalizePath(url.pathname),
    hash: url.hash ? url.hash.slice(1) : "",
  };
}

export function shouldSmoothScrollSamePage(href: string, pathname: string) {
  const { pathname: target, hash } = parseAppHref(href);
  if (!hash) return false;
  return target === normalizePath(pathname);
}

export function scrollToHash(hash: string, updateUrl = true) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });

  if (updateUrl) {
    const next = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", next);
  }

  return true;
}

export function onSectionLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string,
) {
  if (!shouldSmoothScrollSamePage(href, pathname)) return;

  const { hash } = parseAppHref(href);
  event.preventDefault();
  scrollToHash(hash);
}

export function hrefToString(href: string | { pathname?: string | null; hash?: string | null }) {
  if (typeof href === "string") return href;
  const path = href.pathname ?? "/";
  const hash = href.hash ?? "";
  if (!hash) return path;
  return `${path}${hash.startsWith("#") ? hash : `#${hash}`}`;
}
