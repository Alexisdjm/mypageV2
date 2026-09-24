import { ReactBitsDots } from "@/src/components/animations";
import { SecondaryCTA } from "@/src/components/UXUI";
import ServicesSlider from "./ServicesSlider";
import type { ServicesSliderCardProps } from "./ServicesSliderCard";

export interface ServicesProps {
  heading: string;
  subtitle: string;
  ctaLabel: string;
  cards: readonly ServicesSliderCardProps[];
  duration?: number;
  className?: string;
}

export default function Services({
  heading,
  subtitle,
  ctaLabel,
  cards,
  duration = 40,
  className = "",
}: ServicesProps) {
  return (
    <section
      className={`relative z-[4] shrink-0 px-6 py-20 text-center ${className}`}
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <ReactBitsDots
          className="h-full w-full"
          dotSize={4}
          gap={20}
          baseColor="#424242"
          activeColor="#c1c1c1"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <h2 id="services-heading" className="text-[32px] tracking-tight text-white md:text-[40px]">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-base text-white/70">{subtitle}</p>

      <ServicesSlider cards={cards} duration={duration} />

      <SecondaryCTA className="mt-10 rounded-10 px-6">{ctaLabel}</SecondaryCTA>
    </section>
  );
}
