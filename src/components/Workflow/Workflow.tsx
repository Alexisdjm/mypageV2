import { Fragment, type CSSProperties } from "react";
import { CardLight } from "@/src/components/UXUI";
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
  return (
    <section
      className={`relative z-[4] shrink-0 px-5 py-20 text-center md:px-6 ${className}`}
      aria-labelledby="workflow-heading"
    >
      <h2 id="workflow-heading" className="text-[32px] tracking-tight text-white md:text-[40px]">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-base text-white/70">{subtitle}</p>

      <CardLight
        desktopOnly
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
      </CardLight>
    </section>
  );
}
