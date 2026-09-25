import { Slider } from "@/src/components/Slider";
import { CardLight } from "@/src/components/UXUI";
import ServicesSliderCard, { type ServicesSliderCardProps } from "./ServicesSliderCard";

export interface ServicesSliderProps {
  cards: readonly ServicesSliderCardProps[];
  duration?: number;
}

export default function ServicesSlider({ cards, duration = 40 }: ServicesSliderProps) {
  return (
    <CardLight>
      <Slider
        duration={duration}
        gap="var(--service-gap)"
        align="stretch"
        className="services-slider mt-12 py-4"
      >
        {cards.map((card) => (
          <li key={card.title} className="shrink-0">
            <ServicesSliderCard {...card} />
          </li>
        ))}
      </Slider>
    </CardLight>
  );
}
