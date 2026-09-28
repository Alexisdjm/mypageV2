import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type PrimaryCTABase = {
  variant?: "light" | "dark";
};

type PrimaryCTAButtonProps = PrimaryCTABase &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PrimaryCTALinkProps = PrimaryCTABase &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type PrimaryCTAProps = PrimaryCTAButtonProps | PrimaryCTALinkProps;

const variants = {
  light: "bg-white text-neutral-950",
  dark: "bg-neutral-950 text-white",
};

function RippleLayers() {
  return (
    <>
      <span aria-hidden="true" className="primary-cta-ripple" />
      <span aria-hidden="true" className="primary-cta-ripple primary-cta-ripple--2" />
      <span aria-hidden="true" className="primary-cta-ripple primary-cta-ripple--3" />
    </>
  );
}

export default function PrimaryCTA({
  children,
  className = "",
  variant = "light",
  ...props
}: PrimaryCTAProps) {
  const surfaceClass = cn(
    "primary-cta-group relative inline-flex items-center justify-center gap-2 overflow-visible rounded-[10px] px-5 py-2.5 text-sm font-normal",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <a href={href} className={surfaceClass} {...linkProps}>
        <RippleLayers />
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as PrimaryCTAButtonProps;

  return (
    <button type={type} className={surfaceClass} {...buttonProps}>
      <RippleLayers />
      {children}
    </button>
  );
}
