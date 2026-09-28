"use client";

import SectionLink from "@/src/components/navigation/SectionLink";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";
import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type SecondaryCTAProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

const surfaceClass =
  "relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-[10px] bg-[#020202] px-5 py-2.5 text-sm font-normal text-white";

function SecondaryCTAContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span
        data-light
        aria-hidden="true"
        className="ui-card-ring pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
      />
      <span className="relative z-1 inline-flex items-center justify-center">{children}</span>
    </>
  );
}

export default function SecondaryCTA({
  children,
  className = "",
  type = "button",
  href,
  ...props
}: SecondaryCTAProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  useCursorLight(rootRef);

  const assignRootRef = (node: HTMLSpanElement | HTMLButtonElement | null) => {
    rootRef.current = node;
  };

  const classes = `${surfaceClass} ${className}`;

  if (href) {
    return (
      <span ref={assignRootRef} className="inline-flex">
        <SectionLink href={href} className={classes}>
          <SecondaryCTAContent>{children}</SecondaryCTAContent>
        </SectionLink>
      </span>
    );
  }

  return (
    <button
      ref={assignRootRef}
      type={type}
      className={classes}
      {...props}
    >
      <SecondaryCTAContent>{children}</SecondaryCTAContent>
    </button>
  );
}
