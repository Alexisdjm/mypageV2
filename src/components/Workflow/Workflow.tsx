"use client";

import { Fragment, useEffect, useRef, type CSSProperties } from "react";
import WorkflowCard, { type WorkflowCardProps } from "./WorkflowCard";

export interface WorkflowProps {
  heading: string;
  subtitle: string;
  cards: readonly WorkflowCardProps[];
  className?: string;
}

const STAIR_PLACEMENT = [
  "xl:col-start-1 xl:row-start-1",
  "xl:col-start-2 xl:row-start-1",
  "xl:col-start-2 xl:row-start-2",
  "xl:col-start-3 xl:row-start-2",
] as const;

const CARD_WAVE_DELAY = ["0s", "1.45s", "2.9s", "4.35s"] as const;
const RAIL_WAVE_DELAY = ["1.25s", "2.7s", "4.15s"] as const;

export default function Workflow({ heading, subtitle, cards, className = "" }: WorkflowProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const desktop = window.matchMedia("(min-width: 1280px)");
    const pointer = { x: -9999, y: -9999 };
    const glowReach = 160;
    let frame = 0;

    const paint = () => {
      const rings = [...root.querySelectorAll<HTMLElement>("[data-light]")];
      let nearest: HTMLElement | null = null;
      let nearestDist = Infinity;

      for (const el of rings) {
        const rect = el.getBoundingClientRect();
        const dx = Math.max(rect.left - pointer.x, 0, pointer.x - rect.right);
        const dy = Math.max(rect.top - pointer.y, 0, pointer.y - rect.bottom);
        const dist = Math.hypot(dx, dy);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = el;
        }
      }

      for (const el of rings) {
        if (el !== nearest || nearestDist > glowReach) {
          el.style.setProperty("--x", "-600px");
          el.style.setProperty("--y", "-600px");
          continue;
        }

        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${pointer.x - rect.left}px`);
        el.style.setProperty("--y", `${pointer.y - rect.top}px`);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const start = () => {
      if (frame) return;
      window.addEventListener("pointermove", onPointerMove);
      frame = requestAnimationFrame(function tick() {
        paint();
        frame = requestAnimationFrame(tick);
      });
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("pointermove", onPointerMove);
    };

    const syncMode = () => {
      if (desktop.matches) start();
      else stop();
    };

    syncMode();
    desktop.addEventListener("change", syncMode);
    return () => {
      stop();
      desktop.removeEventListener("change", syncMode);
    };
  }, []);

  return (
    <section
      className={`relative z-[4] shrink-0 px-5 py-20 text-center md:px-6 ${className}`}
      aria-labelledby="workflow-heading"
    >
      <h2 id="workflow-heading" className="text-[32px] tracking-tight text-white md:text-[40px]">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-base text-white/70">{subtitle}</p>

      <div
        ref={rootRef}
        className="mx-auto mt-12 flex w-full max-w-[350px] flex-col items-center xl:grid xl:w-fit xl:max-w-none xl:grid-cols-3 xl:gap-6"
      >
        {cards.map((card, index) => (
          <Fragment key={card.title}>
            {index > 0 ? (
              <div
                aria-hidden="true"
                className="workflow-rail"
                style={{ "--wave-delay": RAIL_WAVE_DELAY[index - 1] } as CSSProperties}
              />
            ) : null}
            <WorkflowCard
              {...card}
              className={STAIR_PLACEMENT[index] ?? ""}
              waveDelay={CARD_WAVE_DELAY[index]}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
