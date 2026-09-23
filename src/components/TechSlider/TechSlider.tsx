import { techStack } from "@/src/config/techStack";

export interface TechSliderProps {
  items?: readonly string[];
  duration?: number;
  className?: string;
}

function Track({
  items,
  hidden = false,
}: {
  items: readonly string[];
  hidden?: boolean;
}) {
  return (
    <ul className="flex items-center" aria-hidden={hidden || undefined}>
      {items.map((name) => (
        <li key={name} className="flex items-center">
          <span>{name}</span>
          <span
            className="mx-5 inline-block size-2 shrink-0 rounded-full bg-current"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export default function TechSlider({
  items = techStack,
  duration = 32,
  className = "",
}: TechSliderProps) {
  return (
    <section
      className={`tech-slider overflow-hidden text-sm text-white/75 ${className}`}
      aria-label="Technologies"
    >
      <div
        className="tech-slider-track flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </section>
  );
}
