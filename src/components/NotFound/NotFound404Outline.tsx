"use client";

import { useEffect, useRef, useState } from "react";
import { subscribeCursorPaint } from "@/src/components/Slider/useCursorLight";

export default function NotFound404Outline() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [glow, setGlow] = useState({ cx: -200, cy: -200 });

  useEffect(() => {
    return subscribeCursorPaint((pointer) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      setGlow({
        cx: pointer.x - rect.left,
        cy: pointer.y - rect.top,
      });
    });
  }, []);

  const textProps = {
    x: "50%",
    y: "50%",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
    fill: "none" as const,
    fontSize: 100,
    fontWeight: 600,
    fontFamily: "var(--font-sans), system-ui, sans-serif",
  };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 120"
      className="mx-auto block h-auto w-[min(88vw,540px)] overflow-visible"
      role="img"
      aria-label="404"
    >
      <defs>
        <radialGradient
          id="not-found-stroke-glow"
          gradientUnits="userSpaceOnUse"
          cx={glow.cx}
          cy={glow.cy}
          r="150"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="18%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="42%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <text {...textProps} stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1.25">
        404
      </text>
      <text {...textProps} stroke="url(#not-found-stroke-glow)" strokeWidth="1.5">
        404
      </text>
    </svg>
  );
}
