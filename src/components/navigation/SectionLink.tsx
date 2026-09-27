"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { hrefToString, onSectionLinkClick } from "@/lib/smoothScroll";

type SectionLinkProps = ComponentProps<typeof Link>;

export default function SectionLink({ href, onClick, ...rest }: SectionLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        onSectionLinkClick(event, hrefToString(href), pathname);
      }}
      {...rest}
    />
  );
}
