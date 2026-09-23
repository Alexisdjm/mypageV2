import type { ButtonHTMLAttributes } from "react";

type PrimaryCTAProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "light" | "dark";
};

const variants = {
  light: "bg-white text-neutral-950",
  dark: "bg-neutral-950 text-white",
};

export default function PrimaryCTA({
  children,
  className = "",
  type = "button",
  variant = "light",
  ...props
}: PrimaryCTAProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 text-sm font-normal ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
