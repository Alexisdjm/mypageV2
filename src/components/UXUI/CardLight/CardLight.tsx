"use client";

import { useRef, type ReactNode } from "react";
import { useCursorLight } from "@/src/components/Slider/useCursorLight";

export interface CardLightProps {
  children: ReactNode;
  className?: string;
  desktopOnly?: boolean;
  minWidth?: number;
}

export default function CardLight({
  children,
  className = "",
  desktopOnly = false,
  minWidth = 1280,
}: CardLightProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useCursorLight(rootRef, { desktopOnly, minWidth });

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
