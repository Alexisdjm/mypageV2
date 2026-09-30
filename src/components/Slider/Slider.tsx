"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react";
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
  /** Pointer drag (mouse / touch / pen) while the track auto-scrolls when not dragging. */
  draggable?: boolean;
  "aria-label"?: string;
}

/** Second copy for seamless loop — hidden from assistive tech (marquee decoration). */
function MarqueeDuplicate({ children }: { children: ReactNode }) {
  return Children.map(children, (child, index) => {
    if (!isValidElement(child)) return null;
    const key =
      child.key != null ? `marquee-dup-${String(child.key)}` : `marquee-dup-${index}`;
    return cloneElement(child as ReactElement<{ "aria-hidden"?: boolean; tabIndex?: number }>, {
      key,
      "aria-hidden": true,
      tabIndex: -1,
    });
  });
}

function Track({
  children,
  gap,
  align,
}: {
  children: ReactNode;
  gap?: string;
  align: SliderAlign;
}) {
  return (
    <ul
      className={`flex ${ALIGN_CLASS[align]}`}
      style={gap ? { gap } : undefined}
    >
      {children}
      <MarqueeDuplicate>{children}</MarqueeDuplicate>
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
