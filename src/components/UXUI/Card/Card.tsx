import type { CSSProperties, ReactNode } from "react";

export type CardRing = "follow" | "wave";

export interface CardProps {
  children: ReactNode;
  className?: string;
  width?: string | number;
  height?: string | number;
  hover?: boolean | number;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  ring?: CardRing | false;
  waveDelay?: string;
}

function toSize(value?: string | number) {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

export default function Card({
  children,
  className = "",
  width,
  height,
  hover = false,
  href,
  target,
  rel,
  ariaLabel,
  ring = "follow",
  waveDelay,
}: CardProps) {
  const lift = hover === true ? 15 : hover === false ? 0 : hover;
  const style = {
    width: toSize(width),
    height: toSize(height),
    ...(lift ? { "--card-hover": `${lift}px` } : {}),
  } as CSSProperties;

  const classes = [
    "relative",
    lift ? "transition-transform duration-300 ease-out hover:-translate-y-[var(--card-hover)]" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const ringClass =
    ring === "wave"
      ? "ui-card-ring ui-card-ring-wave pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
      : ring === "follow"
        ? "ui-card-ring pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        : "";

  const content = (
    <>
      {ringClass ? (
        <span
          data-light
          aria-hidden="true"
          className={ringClass}
          style={waveDelay ? ({ "--wave-delay": waveDelay } as CSSProperties) : undefined}
        />
      ) : null}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
        aria-label={ariaLabel}
        className={classes}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={classes} style={style}>
      {content}
    </article>
  );
}
