import ExperienceCardSlider from "./ExperienceCardSlider";
import type { ExperienceCardProps } from "./ExperienceCard";

export interface ExperienceTextPart {
  text: string;
  emphasis?: boolean;
}

export interface ExperienceSliderProps {
  heading: string;
  subtitle: string;
  cards: readonly ExperienceCardProps[];
  summary: readonly ExperienceTextPart[];
  duration?: number;
  className?: string;
}

export default function ExperienceSlider({
  heading,
  subtitle,
  cards,
  summary,
  duration = 40,
  className = "",
}: ExperienceSliderProps) {
  return (
    <section
      className={`relative z-[4] px-6 py-20 text-center text-white/70 ${className}`}
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="text-[32px] tracking-tight md:text-[40px]">
        {heading}
      </h2>
      <p className="mt-3 text-base">{subtitle}</p>

      <ExperienceCardSlider cards={cards} duration={duration} />

      <p className="mx-auto mt-12 max-w-3xl text-base leading-relaxed">
        {summary.map((part, index) =>
          part.emphasis ? (
            <strong key={index} className="font-semibold text-white">
              {part.text}
            </strong>
          ) : (
            <span key={index}>{part.text}</span>
          ),
        )}
      </p>
    </section>
  );
}
