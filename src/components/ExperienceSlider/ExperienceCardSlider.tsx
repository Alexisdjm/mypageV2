"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import ExperienceCard, { type ExperienceCardProps } from "./ExperienceCard";

export interface ExperienceCardSliderProps {
  cards: readonly ExperienceCardProps[];
  duration?: number;
}

function Track({
  cards,
  hidden = false,
}: {
  cards: readonly ExperienceCardProps[];
  hidden?: boolean;
}) {
  return (
    <ul className="flex items-stretch gap-8" aria-hidden={hidden || undefined} inert={hidden || undefined}>
      {cards.map((card) => (
        <li key={card.company} className="shrink-0">
          <ExperienceCard {...card} url={hidden ? undefined : card.url} />
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceCardSlider({
  cards,
  duration = 40,
}: ExperienceCardSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const measure = measureRef.current;
    if (!root || !measure) return;

    const apply = () => {
      let max = 0;
      measure.querySelectorAll<HTMLElement>("[data-card-measure]").forEach((el) => {
        max = Math.max(max, el.scrollWidth);
      });
      if (max > 0) {
        root.style.setProperty("--experience-card-width", `${max}px`);
      }
    };

    apply();
    void document.fonts?.ready.then(apply);
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [cards]);

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
    <div ref={rootRef} className="experience-slider relative mt-12 overflow-hidden py-4">
      <div ref={measureRef} aria-hidden="true" className="pointer-events-none absolute h-0 overflow-hidden">
        {cards.map((card) => (
          <div
            key={card.company}
            data-card-measure
            className="inline-flex flex-col p-[15px] font-sans"
          >
            <span className="whitespace-nowrap text-[18px]">{card.company}</span>
            <span className="whitespace-nowrap text-[14px]">{card.role}</span>
          </div>
        ))}
      </div>
      <div
        className="experience-slider-track flex w-max gap-4"
        style={{ animationDuration: `${duration}s` }}
      >
        <Track cards={cards} />
        <Track cards={cards} hidden />
      </div>
    </div>
  );
}
