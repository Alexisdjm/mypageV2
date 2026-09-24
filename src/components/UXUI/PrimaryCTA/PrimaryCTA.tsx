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

export default function PrimaryCTA({
  children,
  className = "",
  variant = "light",
  ...props
}: PrimaryCTAProps) {
  const classes = `inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 text-sm font-normal ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as PrimaryCTAButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
