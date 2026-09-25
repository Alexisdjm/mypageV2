import Slider, { type SliderDirection } from "@/src/components/Slider/Slider";
import StackSliderCard, { type StackCardSize, type StackSliderCardProps } from "./StackSliderCard";

export interface StackRow {
  cards: readonly StackSliderCardProps[];
  size?: StackCardSize;
  direction?: SliderDirection;
  duration?: number;
}

export interface StackProps {
  heading: string;
  subtitle: string;
  rows: readonly StackRow[];
  className?: string;
}

export default function Stack({ heading, subtitle, rows, className = "" }: StackProps) {
  return (
    <section
      className={`relative z-[4] shrink-0 py-20 text-center ${className}`}
      aria-labelledby="stack-heading"
    >
      <div className="px-5 md:px-6">
        <h2 id="stack-heading" className="text-[32px] tracking-tight text-white md:text-[40px]">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/70">{subtitle}</p>
      </div>

      <div className="mt-12 flex flex-col gap-5 [contain-intrinsic-size:auto_1400px] [content-visibility:auto]">
        {rows.map((row, index) => (
          <Slider
            key={`${row.direction ?? "left"}-${index}`}
            duration={row.duration}
            direction={row.direction}
            gap="1.25rem"
            align="start"
          >
            {row.cards.map((card) => (
              <li key={card.name} className="shrink-0">
                <StackSliderCard {...card} size={row.size ?? card.size} />
              </li>
            ))}
          </Slider>
        ))}
      </div>
    </section>
  );
}
