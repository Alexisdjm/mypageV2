import CapabilityFeat, { type CapabilityFeatProps } from "./CapabilityFeat";

export interface CapabilityProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  features: readonly CapabilityFeatProps[];
  className?: string;
}

export default function Capability({
  titleLine1,
  titleLine2,
  description,
  features,
  className = "",
}: CapabilityProps) {
  return (
    <section
      className={`relative z-[4] shrink-0 bg-black px-6 py-20 md:px-10 md:py-24 ${className}`}
      aria-labelledby="capability-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2
          id="capability-heading"
          className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-white"
        >
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/55 md:mt-10 md:text-lg">
          {description}
        </p>
      </div>

      <ul className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-14 lg:mt-20 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-16">
        {features.map((feature) => (
          <li key={feature.label} className="min-w-0">
            <CapabilityFeat {...feature} />
          </li>
        ))}
      </ul>
    </section>
  );
}
