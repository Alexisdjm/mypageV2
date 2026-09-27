"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useSliderDrag } from "./useSliderDrag";

export type SliderDirection = "left" | "right";
export type SliderAlign = "start" | "center" | "stretch";

const ALIGN_CLASS: Record<SliderAlign, string> = {
  start: "items-start",
  center: "items-center",
  stretch: "items-stretch",
};

export interface SliderProps {
  children: ReactNode;
  duration?: number;
  direction?: SliderDirection;
  gap?: string;
  align?: SliderAlign;
  className?: string;
  trackClassName?: string;
  as?: "div" | "section";
  /** Desktop only: drag horizontally while the track keeps auto-scrolling when not dragging. */
  draggable?: boolean;
  "aria-label"?: string;
}

function Track({
  children,
  gap,
  align,
  hidden = false,
}: {
  children: ReactNode;
  gap?: string;
  align: SliderAlign;
  hidden?: boolean;
}) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!hidden) return;
    const root = listRef.current;
    if (!root) return;

    const focusables = root.querySelectorAll<HTMLElement>(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    for (const el of focusables) {
      el.tabIndex = -1;
    }
  }, [hidden, children]);

  return (
    <ul
      ref={hidden ? listRef : undefined}
      className={`flex ${ALIGN_CLASS[align]}`}
      style={gap ? { gap } : undefined}
      aria-hidden={hidden || undefined}
    >
      {children}
    </ul>
  );
}

export default function Slider({
  children,
  duration = 40,
  direction = "left",
  gap,
  align = "center",
  className = "",
  trackClassName = "",
  as: Root = "div",
  draggable = false,
  "aria-label": ariaLabel,
}: SliderProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const assignRootRef = (node: HTMLElement | null) => {
    rootRef.current = node;
  };

  useSliderDrag({
    rootRef,
    trackRef,
    draggable,
    duration,
    direction,
  });

  const rootClassName = [
    "ui-slider overflow-hidden",
    draggable ? "ui-slider--draggable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const track = (
    <div
      ref={trackRef}
      className={`ui-slider-track flex w-max ${trackClassName}`}
      data-direction={direction}
      style={{ animationDuration: `${duration}s` }}
    >
      <Track gap={gap} align={align}>
        {children}
      </Track>
      <Track gap={gap} align={align} hidden>
        {children}
      </Track>
    </div>
  );

  if (Root === "section") {
    return (
      <section ref={assignRootRef} className={rootClassName} aria-label={ariaLabel}>
        {track}
      </section>
    );
  }

  return (
    <div ref={assignRootRef} className={rootClassName} aria-label={ariaLabel}>
      {track}
    </div>
  );
}
