import type { ReactNode } from "react";

export interface FormFieldShellProps {
  children: ReactNode;
  className?: string;
}

/** Cursor-following border ring (see `.ui-card-ring` in globals.css). */
export default function FormFieldShell({ children, className = "" }: FormFieldShellProps) {
  return (
    <div className={`relative rounded-[10px] ${className}`}>
      <span
        data-light
        aria-hidden="true"
        className="ui-card-ring pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
      />
      {children}
    </div>
  );
}
