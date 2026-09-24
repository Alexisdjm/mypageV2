"use client";

import { useEffect, useRef } from "react";
import ServicesSliderCard, { type ServicesSliderCardProps } from "./ServicesSliderCard";

export interface ServicesSliderProps {
  cards: readonly ServicesSliderCardProps[];
  duration?: number;
}

function Track({
  cards,
  hidden = false,
}: {
  cards: readonly ServicesSliderCardProps[];
  hidden?: boolean;
}) {
  return (
    <ul className="flex items-stretch gap-[var(--service-gap)]" aria-hidden={hidden || undefined} inert={hidden || undefined}>
      {cards.map((card) => (
        <li key={card.title} className="shrink-0">
          <ServicesSliderCard {...card} />
        </li>
      ))}
    </ul>
  );
}

export default function ServicesSlider({ cards, duration = 40 }: ServicesSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const pointer = { x: -9999, y: -9999 };

    const paint = () => {
      root.querySelectorAll<HTMLElement>("[data-light]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${pointer.x - rect.left}px`);
        el.style.setProperty("--y", `${pointer.y - rect.top}px`);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    let frame = requestAnimationFrame(function tick() {
      paint();
      frame = requestAnimationFrame(tick);
    });

    window.addEventListener("pointermove", onPointerMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div ref={rootRef} className="services-slider mt-12 overflow-hidden py-4">
      <div
        className="experience-slider-track flex w-max gap-[var(--service-gap)]"
        style={{ animationDuration: `${duration}s` }}
      >
        <Track cards={cards} />
        <Track cards={cards} hidden />
      </div>
    </div>
  );
}
