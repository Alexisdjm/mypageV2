import Slider from "@/src/components/Slider/Slider";
import { techStack } from "@/src/config/techStack";

export interface TechSliderProps {
  items?: readonly string[];
  duration?: number;
  className?: string;
}

export default function TechSlider({
  items = techStack,
  duration = 32,
  className = "",
}: TechSliderProps) {
  return (
    <Slider
      as="section"
      duration={duration}
      className={`text-sm text-white/75 ${className}`}
      aria-label="Technologies"
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
