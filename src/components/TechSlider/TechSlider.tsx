import Slider from "@/src/components/Slider/Slider";
import { techStack } from "@/src/config/techStack";

export interface TechSliderProps {
  items?: readonly string[];
  duration?: number;
  className?: string;
  ariaLabel?: string;
}

export default function TechSlider({
  items = techStack,
  duration = 32,
  className = "",
  ariaLabel = "Technologies",
}: TechSliderProps) {
  return (
    <Slider
      as="section"
      duration={duration}
      className={`text-sm text-white/75 ${className}`}
      aria-label={ariaLabel}
    >
      {items.map((name) => (
        <li key={name} className="flex items-center">
          <span>{name}</span>
          <span
            className="mx-5 inline-block size-2 shrink-0 rounded-full bg-current"
            aria-hidden="true"
          />
        </li>
      ))}
    </Slider>
  );
}
