"use client";

import { useRef, type ButtonHTMLAttributes } from "react";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";

type SecondaryCTAProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryCTA({
  children,
  className = "",
  type = "button",
  ...props
}: SecondaryCTAProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useCursorLight(buttonRef);

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-[10px] bg-[#020202] px-5 py-2.5 text-sm font-normal text-white ${className}`}
      {...props}
    >
      <span
        data-light
        aria-hidden="true"
        className="ui-card-ring pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
      />
      <span className="relative z-1 inline-flex items-center justify-center">{children}</span>
    </button>
  );
}
