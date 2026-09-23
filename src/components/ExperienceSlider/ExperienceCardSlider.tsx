"use client";

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
    <ul className="flex items-stretch gap-4" aria-hidden={hidden || undefined}>
      {cards.map((card) => (
        <li key={card.company} className="shrink-0">
          <ExperienceCard {...card} />
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceCardSlider({
  cards,
  duration = 40,
}: ExperienceCardSliderProps) {
  return (
    <div className="experience-slider mt-12 overflow-hidden py-4">
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
