import type { ReactNode } from "react";

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
  return (
    <ul
      className={`flex ${ALIGN_CLASS[align]}`}
      style={gap ? { gap } : undefined}
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
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
  "aria-label": ariaLabel,
}: SliderProps) {
  const gapStyle = gap ? { gap } : undefined;

  return (
    <Root className={`ui-slider overflow-hidden ${className}`} aria-label={ariaLabel}>
      <div
        className={`ui-slider-track flex w-max ${trackClassName}`}
        data-direction={direction}
        style={{ animationDuration: `${duration}s`, ...gapStyle }}
      >
        <Track gap={gap} align={align}>
          {children}
        </Track>
        <Track gap={gap} align={align} hidden>
          {children}
        </Track>
      </div>
    </Root>
  );
}
