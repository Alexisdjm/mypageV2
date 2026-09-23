import type { ButtonHTMLAttributes } from "react";

type SecondaryCTAProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryCTA({
  children,
  className = "",
  type = "button",
  ...props
}: SecondaryCTAProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-[10px] border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-normal text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
